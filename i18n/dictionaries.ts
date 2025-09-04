export type Lang = 'jp' | 'en';

export const dict = {
  jp: {
    nav: {
      wholesale: '卸売',
      buyback: '買取',
      consulting: 'コンサル',
      mission: 'ミッション',
      company: '会社情報',
      contact: 'お問い合わせ',
    },
    hero: {
      title: '遊びの未来に、安心と信頼を。',
      subtitle: '玩具を通じて、国内外の子どもたちへ安全と真心を。BtoB卸・中古買取・SNSコンサルで「三方良し」を実現します。',
      ctaConsult: '取引相談',
      ctaCategories: '取扱カテゴリを見る'
    },
    safety: {
      age: '年齢適合',
      inspect: '検品基準',
      recall: 'リコール体制'
    },
    footer: {
      summary: '株式会社AiGIVE（アイギブ）｜玩具・TCGのB2B卸／中古買取／SNSコンサルティング',
      privacy: 'プライバシー',
      safety: '安全ポリシー',
      compliance: 'コンプライアンス'
    },
    contact: {
      title: 'お問い合わせ',
      success: '送信が完了しました。ありがとうございます。',
      type: '区分',
      company: '会社名（卸の場合必須）',
      name: 'お名前',
      email: 'メールアドレス',
      phone: '電話番号（任意）',
      channelUrl: 'EC/実店舗URL（任意）',
      categories: 'カテゴリ（任意）',
      monthlyBudget: '月予算（任意）',
      market: '市場（任意）',
      message: 'メッセージ（最大1000文字）',
      agree: 'プライバシー/ポリシーに同意',
      submit: '送信',
      wholesale: '卸売',
      buyback: '買取',
      general: '一般',
      thanksTitle: 'お問い合わせありがとうございます',
      thanksBody: '担当より2営業日以内にご連絡いたします。'
    },
    company: {
      title: '会社情報',
      antisocial: '当社は反社会的勢力との一切の関係を遮断します。'
    }
  },
  en: {
    nav: {
      wholesale: 'Wholesale',
      buyback: 'Buyback',
      consulting: 'Consulting',
      mission: 'Mission',
      company: 'Company',
      contact: 'Contact',
    },
    hero: {
      title: 'Trust and Safety for the Future of Play.',
      subtitle: 'Delivering safe and heartfelt toys worldwide. Wholesale, buyback, and SNS consulting for win-win-win partnerships.',
      ctaConsult: 'Talk to Sales',
      ctaCategories: 'View Categories'
    },
    safety: {
      age: 'Age Labeling',
      inspect: 'Inspection',
      recall: 'Recall Ready'
    },
    footer: {
      summary: 'AiGIVE Inc. — B2B wholesale, buyback and SNS consulting for toys & TCG.',
      privacy: 'Privacy',
      safety: 'Safety Policy',
      compliance: 'Compliance'
    },
    contact: {
      title: 'Contact',
      success: 'Your message has been sent. Thank you!',
      type: 'Type',
      company: 'Company (required for wholesale)',
      name: 'Name',
      email: 'Email',
      phone: 'Phone (optional)',
      channelUrl: 'EC/Store URL (optional)',
      categories: 'Categories (optional)',
      monthlyBudget: 'Monthly Budget (optional)',
      market: 'Market (optional)',
      message: 'Message (max 1000 chars)',
      agree: 'I agree to the privacy/policy terms',
      submit: 'Send',
      wholesale: 'Wholesale',
      buyback: 'Buyback',
      general: 'General',
      thanksTitle: 'Thanks for reaching out',
      thanksBody: 'Our team will reply within 2 business days.'
    },
    company: {
      title: 'Company',
      antisocial: 'We strictly sever any ties with anti-social forces.'
    }
  }
} as const;

export function getLangFromSearch(searchParams: URLSearchParams): Lang {
  const v = searchParams.get('lang');
  return v === 'en' ? 'en' : 'jp';
}
