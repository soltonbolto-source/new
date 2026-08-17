import './globals.css';

export const metadata = {
  metadataBase: new URL('https://ravza.example.com'),
  title: {
    default: 'Равза медресеси | Ислам илимдери жана Куран жаттоо',
    template: '%s | Равза медресеси',
  },
  description: 'Равза медресеси — 2000-жылдан бери ислам илимдерин үйрөтүп келе жаткан медресе. Куран жаттоо, хадис, фикх, акыйда жана араб тили.',
  keywords: ['Равза медресеси', 'ислам илимдери', 'Куран жаттоо', 'хадис', 'фикх', 'акыйда', 'араб тили', 'Кыргызстан'],
  openGraph: {
    title: 'Равза медресеси | Ислам илимдери жана Куран жаттоо',
    description: 'Равза медресеси — 2000-жылдан бери ислам илимдерин үйрөтүп келе жаткан медресе.',
    url: 'https://ravza.example.com',
    siteName: 'Равза медресеси',
    locale: 'ky_KG',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ky">
      <body>
        {children}
      </body>
    </html>
  );
}
