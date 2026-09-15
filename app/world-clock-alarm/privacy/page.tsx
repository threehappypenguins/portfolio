import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | World Clock Alarm",
  description: "Privacy policy for the World Clock Alarm Android app.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nosnippet: true,
      noarchive: true,
    },
  },
};

export default function WorldClockAlarmPrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 px-4 py-16">
      <article className="w-full max-w-3xl space-y-8 about-paragraph">
        <header className="space-y-3">
          <h1 className="heading-secondary">World Clock Alarm Privacy Policy</h1>
          <p className="text-sm">Last updated: September 15, 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Who this covers</h2>
          <p>
            This policy applies to the World Clock Alarm Android app published
            by Sarah Poulin (package <code>com.worldclockalarm.app</code>). It
            does not apply to this portfolio website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Data the app does not collect
          </h2>
          <p>
            World Clock Alarm does not collect, transmit, or share user data.
            The app has no internet access, no accounts, no analytics, no
            advertising, and no crash reporting. Nothing you enter is sent to
            me, to Google (beyond what the Play Store itself may already
            process), or to any other service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            What stays on your phone
          </h2>
          <p>
            Alarms and settings are stored only on your device. That can
            include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Alarm times, repeat days or specific dates, and time zones</li>
            <li>Optional alarm names</li>
            <li>Sound, vibration, snooze, and display preferences</li>
            <li>
              An optional photo you pick as an alarm background (the app stores
              a local reference to that image; the image itself is not uploaded)
            </li>
          </ul>
          <p>
            Android backup for this app is disabled. Uninstalling the app
            removes this data from the device.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Permissions</h2>
          <p>
            The app asks for permissions that let alarms ring on time (for
            example notifications, exact alarms, and related device settings).
            Those permissions are used only to schedule and present alarms on
            your device. They are not used to collect or share personal data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Children</h2>
          <p>
            The app is not directed at children and does not knowingly collect
            data from anyone, including children.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Changes</h2>
          <p>
            If this policy changes, the updated date above will change. The
            app will not start collecting data without an updated policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a
              href="mailto:threehappypenguin@gmail.com"
              className="underline underline-offset-2"
            >
              threehappypenguin@gmail.com
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
