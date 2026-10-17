import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogViewport,
} from "@/registry/sector23/ui/alert-dialog";
import { Button } from "@/registry/sector23/ui/button";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

const sections = [
  {
    title: "1. Your account",
    body: "You're responsible for keeping your login credentials secure and for all activity under your account. Notify us right away if you suspect unauthorized access. Workspace owners may now require two-factor authentication for every member.",
  },
  {
    title: "2. Acceptable use",
    body: "Don't use the service to distribute malware, send unsolicited bulk messages, or attempt to access data that isn't yours. We may suspend accounts that put other customers or our infrastructure at risk, and we'll tell you why when we do.",
  },
  {
    title: "3. Your content",
    body: "You keep ownership of everything you upload. You grant us a limited license to host, back up, and display your content solely to operate the service. We no longer use customer content to train any models, and that is now stated explicitly.",
  },
  {
    title: "4. Data retention",
    body: "Deleted projects now stay in a recoverable trash for 30 days, up from 14, before being permanently removed. Backups containing deleted data are purged within 90 days. Exports remain available at any time from workspace settings.",
  },
  {
    title: "5. Billing changes",
    body: "Paid plans renew automatically at the end of each billing period. We'll email you at least 30 days before any price change takes effect. Downgrades apply at the next renewal, and unused time is not refunded except where required by law.",
  },
  {
    title: "6. Third-party integrations",
    body: "When you connect an integration, you authorize us to exchange data with that provider on your behalf. Their handling of your data is governed by their own terms. You can revoke access at any time from the integrations page.",
  },
  {
    title: "7. Termination",
    body: "You can close your account whenever you like. If we terminate your account for reasons other than a breach of these terms, we'll give you 30 days' notice and a prorated refund for any prepaid period.",
  },
  {
    title: "8. Changes to these terms",
    body: "We'll notify you of material changes by email and in the app at least 14 days before they take effect. Continuing to use the service after that date means you accept the updated terms.",
  },
];

export function AlertDialogInnerScroll() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button />}>
        Review updated terms
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogViewport>
          <AlertDialogPopup className="max-h-[min(32rem,calc(100dvh-3rem))]">
            <AlertDialogHeader>
              <AlertDialogTitle>
                We&apos;ve updated our Terms of Service
              </AlertDialogTitle>
              <AlertDialogDescription>
                Please review and accept the new terms to keep using your
                workspace. They take effect on November 1, 2026.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <ScrollArea className="border-y border-border">
              <ScrollAreaViewport>
                <ScrollAreaContent className="gap-4 px-4 py-3">
                  {sections.map((section) => (
                    <section
                      key={section.title}
                      className="flex flex-col gap-1"
                    >
                      <h3 className="font-medium">{section.title}</h3>
                      <p className="text-muted-foreground">{section.body}</p>
                    </section>
                  ))}
                </ScrollAreaContent>
              </ScrollAreaViewport>
              <ScrollAreaScrollbar>
                <ScrollAreaThumb />
              </ScrollAreaScrollbar>
            </ScrollArea>
            <AlertDialogFooter>
              <AlertDialogClose render={<Button variant="outline" />}>
                Decline
              </AlertDialogClose>
              <AlertDialogClose render={<Button />}>
                Accept and continue
              </AlertDialogClose>
            </AlertDialogFooter>
          </AlertDialogPopup>
        </AlertDialogViewport>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
