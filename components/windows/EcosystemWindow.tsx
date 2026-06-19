"use client";

import type { ThemeKey } from "@/types";
import type { WindowCopy } from "@/content/types";
import { WindowFrame } from "./WindowFrame";
import { AnswerText, MessageCallout } from "@/components/ui";

/**
 * EcosystemWindow — the standard question/answer window used across the
 * homepage and detail routes. Wraps WindowFrame, rendering the question as
 * eyebrow, the title, the lead answer, optional body content and the
 * ecosystem message callout.
 */
export function EcosystemWindow({
  theme,
  copy,
  state,
  fullScreen = true,
  showMessage = true,
  children,
  anchorId,
}: {
  theme: ThemeKey;
  copy: WindowCopy;
  state?: string;
  fullScreen?: boolean;
  showMessage?: boolean;
  children?: React.ReactNode;
  anchorId?: string;
}) {
  return (
    <WindowFrame
      theme={theme}
      windowId={copy.id}
      question={copy.question}
      title={copy.title}
      state={state}
      fullScreen={fullScreen}
      id={anchorId}
    >
      <AnswerText>{copy.answer}</AnswerText>
      {children ? <div className="mt-7">{children}</div> : null}
      {showMessage && copy.message ? (
        <MessageCallout>{copy.message}</MessageCallout>
      ) : null}
    </WindowFrame>
  );
}
