import { IconX } from "@tabler/icons-react";
import { Card, CardContent } from "@/app/_components/ui/Card";
import { Button } from "@/app/_components/ui/Button";

export default function WelcomeCard() {
  return (
    <Card className="relative overflow-hidden bg-black text-white">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 text-white hover:bg-white/10"
      >
        <IconX className="h-5 w-5" />
      </Button>
      <CardContent className="flex h-full flex-col justify-between p-6">
        <h3 className="text-2xl font-bold">Welcome to Scribe!</h3>
        <div className="mt-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.49994 22.5L1.50574 22.5059C1.57463 22.5748 1.6564 22.6294 1.7464 22.6667C1.8364 22.704 1.93286 22.7231 2.03027 22.7231C2.12769 22.7231 2.22415 22.704 2.31415 22.6667C2.40415 22.6294 2.48592 22.5748 2.5548 22.5059L16.3579 8.70271C16.4264 8.63421 16.4807 8.55289 16.5178 8.4634C16.5549 8.3739 16.574 8.27798 16.574 8.18111C16.574 8.08424 16.5549 7.98832 16.5178 7.89882C16.4807 7.80932 16.4264 7.728 16.3579 7.65951L16.3549 7.65658C16.2845 7.58618 16.2009 7.53033 16.1089 7.49222C16.0169 7.45412 15.9184 7.43451 15.8188 7.43451C15.7192 7.43451 15.6206 7.45412 15.5286 7.49222C15.4366 7.53033 15.3531 7.58618 15.2827 7.65658L1.49994 21.4394C1.35929 21.58 1.28027 21.7708 1.28027 21.9697C1.28027 22.1686 1.35929 22.3594 1.49994 22.5Z"
              fill="#FAFAFA"
            />
            <path
              d="M5.56055 19.5H13.4999L12.8786 18H7.06055L5.56055 19.5Z"
              fill="#FAFAFA"
            />
            <path
              d="M9.31055 15.75H15.1286L16.6286 14.25H10.8105L9.31055 15.75Z"
              fill="#FAFAFA"
            />
            <path
              d="M4.5 18.4393V10.5L6 11.1211V16.9393L4.5 18.4393Z"
              fill="#FAFAFA"
            />
            <path
              d="M13.5 19.5L21 12L20.432 11.5074L19.8639 11.0147L12.8787 18"
              fill="#FAFAFA"
            />
            <path
              d="M12 3L4.5 10.5L6 11.1211L12.9844 4.13672L12 3Z"
              fill="#FAFAFA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.8271 1.33595C16.7754 1.1364 15.7579 1.2509 14.9062 1.50001C13.203 1.99825 12 3.00001 12 3.00001L12.9844 4.13673C12.9844 4.13673 13.96 3.3387 15.3281 2.93849C16.6963 2.53828 18.2962 2.49601 19.8896 4.10451C21.4831 5.713 21.4346 7.32946 21.0293 8.70411C20.624 10.0788 19.864 11.0147 19.864 11.0147L21 12C21 12 21.9674 10.8329 22.4707 9.12599C22.974 7.41906 22.9393 5.05172 20.9561 3.04982C19.9645 2.04887 18.8789 1.53551 17.8271 1.33595Z"
              fill="#FAFAFA"
            />
          </svg>{" "}
        </div>
      </CardContent>
    </Card>
  );
}
