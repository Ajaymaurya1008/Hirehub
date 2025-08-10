import Navbar from "@/components/Navbar";

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 ">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Terms and Conditions for HireHub
              </h1>
              <p className="mt-8 text-base text-black sm:text-xl">
                Last updated: 26/09/2024
              </p>
              <p className="mt-4 text-base text-black sm:text-xl">
                Welcome to HireHub! These terms and conditions outline the rules
                and regulations for the use of our website, located at{" "}
                <a
                  href="https://hirehub-web.vercel.app"
                  className="text-blue-600 hover:underline"
                >
                  https://hirehub-web.vercel.app
                </a>
                . By accessing or using our website, you accept and agree to
                these terms. If you disagree with any part of the terms, please
                do not continue using our services.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                1. Acceptance of Terms
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                By accessing the website and using any of our services, you
                agree to comply with these terms. These terms apply to all
                visitors, users, and others who access or use the website.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                2. Eligibility
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                You must be at least 18 years old or the age of majority in your
                jurisdiction to use this website. By using this site, you
                represent and warrant that you meet these requirements.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                3. Account Registration
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                To access certain features of HireHub, you may be required to
                register for an account. You must provide accurate and complete
                information during registration and keep your account
                information updated. You are responsible for maintaining the
                confidentiality of your account and password.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                4. User Responsibilities
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                You agree not to engage in the following activities while using
                HireHub:
              </p>
              <ul className="mt-4 text-base text-black sm:text-xl list-disc list-inside">
                <li>Impersonating others or providing false information.</li>
                <li>
                  Engaging in illegal activities or violating any applicable
                  laws.
                </li>
                <li>Uploading harmful, offensive, or inappropriate content.</li>
                <li>
                  Distributing viruses or any harmful code that could damage or
                  disrupt the website.
                </li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                5. Service Availability
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                We do not guarantee that the website will always be available or
                operate without errors. Maintenance, upgrades, or unforeseen
                issues may cause temporary disruptions, and we are not
                responsible for any downtime.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                6. Intellectual Property
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                All content on the HireHub website, including but not limited to
                text, graphics, logos, images, and software, is the intellectual
                property of HireHub or its licensors and is protected by
                applicable copyright and trademark laws. You may not use or
                reproduce any content without our express written permission.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                7. Termination
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                We reserve the right to suspend or terminate your account or
                access to the website if you violate these terms or engage in
                behavior that harms the platform, other users, or third parties.
                Upon termination, your right to use the website will immediately
                cease.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                8. Limitation of Liability
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                HireHub is not liable for any indirect, incidental, special, or
                consequential damages arising out of or in connection with the
                use or inability to use the website or services, even if we have
                been advised of the possibility of such damages.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                9. Changes to Terms
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                We may modify these terms and conditions from time to time. Any
                changes will be posted on this page, and your continued use of
                the website after such modifications constitutes your acceptance
                of the updated terms.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                10. Governing Law
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                These terms and conditions are governed by and construed in
                accordance with the laws of India, and you irrevocably
                submit to the exclusive jurisdiction of the courts in that
                jurisdiction.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                11. Contact Us
              </h2>
              <p className="mt-4 text-base text-black sm:text-xl">
                If you have any questions or concerns about these terms, please
                contact us at:
              </p>
              <p className="mt-2 text-base text-black sm:text-xl">
                ajaykvmaurya@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
