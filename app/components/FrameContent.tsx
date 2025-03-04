"use client";
import frame from '@farcaster/frame-sdk';

export default function FrameContent() {
  const closeFrame = () => frame.actions.close();
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={closeFrame}>Close Frame</button>
    </div>
  );
}