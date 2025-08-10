import express from "express";
import cron from "node-cron";
import fetch from "node-fetch";
import { collection, getDocs, deleteDoc, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";
import dotenv from "dotenv";

dotenv.config();

const fetchData = async () => {
  const queries = [
    "Frontend Developer in India",
    "Backend Developer in India",
    "Devops Engineer in India",
    "App Developer in India",
    "AI Engineer in India",
    "ML Engineer in India",
    "UI Designer in India",
    "FullStack Developer in India",
  ];

  const url = "https://jsearch.p.rapidapi.com/search";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.JOB_SEARCH_API,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const jobsCollectionToDelete = collection(db, "Jobs");
    const querySnapshot = await getDocs(jobsCollectionToDelete);
    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log("All documents deleted successfully");

    const fetchPromises = queries.map((query) => {
      const params = new URLSearchParams({
        query: query,
        page: "1",
        num_pages: "1",
        date_posted: "all",
      });

      return fetch(`${url}?${params.toString()}`, options)
        .then((res) => res.json())
        .then((jobData) => {
          if (!jobData.data) {
            throw new Error(
              `API response for ${query} does not contain 'data' property`
            );
          }

          return jobData.data.map((item) => ({
            Category: query.split(" ")[0],
            Company: item.employer_name,
            JobPublisher: item.job_publisher,
            Link: item.job_apply_link,
            Role: item.job_title,
            Logo: item.employer_logo,
            Location: item.job_city,
            About: item.job_description,
            Id: item.job_id,
            Type: item.job_employment_type,
          }));
        });
    });

    const jobLists = await Promise.all(fetchPromises);
    const allJobs = jobLists.flat();

    const jobsCollection = collection(db, "Jobs");
    const addPromises = allJobs.map((job) => addDoc(jobsCollection, job));
    await Promise.all(addPromises);
    console.log("All documents added successfully");
  } catch (error) {
    console.error(error);
  }
};

const app = express();
const PORT = process.env.PORT || 3000;

// cron.schedule("0 0 * * *", fetchData);

fetchData();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
