import { Metadata } from 'next';
import FrameContent from './components/FrameContent';

export async function generateMetadata(): Promise<Metadata> {
  const link = `https://roaring-sopapillas-b87c79.netlify.app`
  const imageUrl = `${link}/img/helloworld.png`;
  const frameUrl = link;
  const frameEmbed = {
    version: 'next',
    imageUrl,
    button: {
      title: 'Launch Hello World',
      action: {
        type: 'launch_frame',
        name: 'Hello World Frame',
        url: frameUrl,
        splashImageUrl: imageUrl,
        splashBackgroundColor: '#ffffff',
      },
    },
  };
  return {
    other: {
      property: 'fc:frame',
      content: JSON.stringify(frameEmbed),
    },
  };
}
export default function Page() {
  return <FrameContent />;
}