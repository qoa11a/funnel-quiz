export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col min-h-0 flex-1 py-6 px-5 overflow-auto">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold mb-3">Privacy Policy</h1>
        <p className="text-base opacity-80">
          This is placeholder content for a test task. Replace it with a real
          privacy policy if needed.
        </p>
        <p className="text-sm opacity-60 mt-2">Last updated: February 5,
          2026</p>
      </header>

      <main className="space-y-8">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="text-base opacity-80 leading-relaxed">
            We collect only the minimum information required to provide the quiz
            experience. This page is a mock and does not constitute legal
            advice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-base opacity-80 leading-relaxed">
              Email address (if you choose to submit it).
            </li>
            <li className="text-base opacity-80 leading-relaxed">
              Quiz answers (used to show results and improve the experience).
            </li>
            <li className="text-base opacity-80 leading-relaxed">
              Basic technical data (e.g., browser type, device type) for
              diagnostics and analytics.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">How We Use Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-base opacity-80 leading-relaxed">
              To provide the quiz and display results.
            </li>
            <li className="text-base opacity-80 leading-relaxed">
              To fix bugs and improve performance and usability.
            </li>
            <li className="text-base opacity-80 leading-relaxed">
              To contact you only if you explicitly asked us to (mock behavior).
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Sharing</h2>
          <p className="text-base opacity-80 leading-relaxed">
            We do not sell your personal data. In a real product, we might share
            limited data with service providers (analytics, hosting) strictly to
            operate the app.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Data Retention</h2>
          <p className="text-base opacity-80 leading-relaxed">
            We keep data only as long as necessary to run the quiz and improve
            it. Since this is a test task, the retention period is not defined.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Your Choices</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-base opacity-80 leading-relaxed">
              You can choose not to provide an email address.
            </li>
            <li className="text-base opacity-80 leading-relaxed">
              You can request deletion of your email (mock).
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-base opacity-80 leading-relaxed">
            If this were a real product, we’d provide a support email here. For
            the test task, you can treat this section as a placeholder.
          </p>
        </section>

        <div className="pt-6 border-t border-white/10">
          <p className="text-sm opacity-60 leading-relaxed">
            Disclaimer: This page is dummy content for a test task and is not a
            legally binding privacy policy.
          </p>
        </div>
      </main>
    </div>
  );
}
