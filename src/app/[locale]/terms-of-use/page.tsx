export default function TermsOfUsePage() {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col min-h-0 flex-1 py-6 px-5">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold mb-3">Terms of Use</h1>
        <p className="text-base opacity-80">
          This is placeholder content for a test task. Replace it with real terms
          if/when needed.
        </p>
        <p className="text-sm opacity-60 mt-2">Last updated: February 5, 2026</p>
      </header>

      <main className="space-y-8">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="text-base opacity-80 leading-relaxed">
            These Terms govern your use of this demo quiz experience. This is a
            mock document created for a test task and is not legal advice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Using the App</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-base opacity-80 leading-relaxed">
              You may use the quiz for personal, non-commercial purposes.
            </li>
            <li className="text-base opacity-80 leading-relaxed">
              Please don’t misuse the app (e.g., attempt to break it, abuse forms,
              or spam submissions).
            </li>
            <li className="text-base opacity-80 leading-relaxed">
              Features may change or be removed at any time (this is a demo).
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Your Content</h2>
          <p className="text-base opacity-80 leading-relaxed">
            Any information you submit (like an email address or quiz answers) is
            provided by you voluntarily. In a real product, we would define how
            that content is processed and stored. For this test task, treat it as
            placeholder behavior.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Intellectual Property</h2>
          <p className="text-base opacity-80 leading-relaxed">
            The app UI, branding, and code are provided as part of a demo. In a
            real project, this section would clarify ownership, licenses, and
            permitted use.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Disclaimer</h2>
          <p className="text-base opacity-80 leading-relaxed">
            The app is provided “as is” without warranties of any kind. We don’t
            guarantee availability, accuracy of results, or fitness for any
            purpose. This is a test task demo, so treat outcomes as non-binding.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Limitation of Liability</h2>
          <p className="text-base opacity-80 leading-relaxed">
            To the maximum extent permitted by law, we are not liable for any
            indirect, incidental, or consequential damages arising from use of the
            app. (Again: placeholder text for demo purposes.)
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Changes</h2>
          <p className="text-base opacity-80 leading-relaxed">
            We may update these Terms from time to time. For a real product,
            we’d notify users and update the “Last updated” date above.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-base opacity-80 leading-relaxed">
            If this were a real product, we’d list a support contact here. For
            the test task, this section is a placeholder.
          </p>
        </section>

        <div className="pt-6 border-t border-white/10">
          <p className="text-sm opacity-60 leading-relaxed">
            Disclaimer: This page is dummy content for a test task and is not a
            legally binding Terms of Use document.
          </p>
        </div>
      </main>
    </div>
  );
}
