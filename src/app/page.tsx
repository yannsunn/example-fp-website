import type { Metadata } from 'next'
import Image from 'next/image'
import BaseLayout from '@/components/BaseLayout'
import SharedCTA from '@/components/SharedCTA'
import CTAButton from '@/components/CTAButton'
import '../styles/index.css'

export const metadata: Metadata = {
  title: 'ホーム',
  description: 'ファイナンシャルプランナー油井宏介の公式サイト。保険・資産形成・事業保障までトータルにサポートし、一人ひとりの人生に「安心」と「希望」を届けます。',
  keywords: ['ファイナンシャルプランナー', '保険相談', '資産形成', '無料相談'],
  openGraph: {
    title: '油井宏介 | ファイナンシャルプランナー',
    description: '保険・資産形成・事業保障までトータルにサポート。一人ひとりの人生に「安心」と「希望」を届けます。',
    url: 'https://yuikosuke-website.vercel.app',
    siteName: '油井宏介 FP事務所',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function HomePage() {
  return (
    <BaseLayout title="FPコンサルティング">
      
      <main>
        <section className="hero fadein-section">
          <div className="hero-container">
            <div className="hero-image-modern">
              <Image 
                src="/yuikosuke.jpg" 
                alt="ファイナンシャルプランナー油井宏介のプロフィール写真" 
                width={280}
                height={380}
                className="hero-photo-modern animated-hero-photo"
                priority
                sizes="(max-width: 600px) 180px, (max-width: 900px) 220px, 280px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rsr1PzDhXTvfQ=="
              />
            </div>
            <div className="hero-text">
              <h2>あなたの人生に、安心と希望を</h2>
              <p className="tagline">一人ひとりの夢や目標に合わせた最適な<strong>ファイナンシャルプラン</strong>をご提案します</p>
              <p>専門のファイナンシャルプランナーが、保険・資産形成・事業保障までトータルにサポートします。複雑な金融商品の選択や将来設計のお悩みを解決し、明るい未来への架け橋となります。</p>
              <div className="hero-buttons">
                <CTAButton variant="primary" href="/contact">無料相談</CTAButton>
                <CTAButton variant="service" href="/services">サービス詳細を見る</CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section className="intro fadein-section">
          <h2>「お金」の専門家として、あなたの未来をサポートします</h2>
          <div className="intro-content">
            <p>
              人生のさまざまな局面で直面する「お金」の問題や将来への不安。<br/>
              「老後のために今できることは？」「子どもの教育資金はどうすれば？」「自分に合った保険プランは？」<br/>
              <strong>そんな悩みを一人で抱え込まないでください。</strong>
            </p>
            <p>
              私たちはあなたの人生に寄り添い、専門知識とアドバイスで最適な道筋を一緒に考えていきます。<br/>
              お客様一人ひとりの状況や目標に合わせたオーダーメイドのプランニングで、「安心」と「希望」に満ちた未来を築くお手伝いをいたします。
            </p>
          </div>
        </section>

        <section className="benefits fadein-section">
          <h2>ご相談いただくメリット</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13 3v5a2 2 0 002 2h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>一人ひとりに合わせた<br/>オーダーメイドプラン</h3>
              <p>あなたの価値観やライフプランに合わせた、最適な金融商品とプランニングをご提案します。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <path d="M12 2L3.09 7.26C2.36 7.72 2 8.54 2 9.45v4.11c0 5.05 3.51 9.78 8.35 10.94a2 2 0 003.3 0C18.49 23.34 22 18.61 22 13.56V9.45c0-.9-.64-1.73-1.91-2.19L12 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>中立的な視点での<br/>アドバイス</h3>
              <p>特定の金融機関に縛られない、お客様の利益を最優先した中立的なアドバイスを提供します。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 10h8m-8 4h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>気軽に相談できる<br/>アクセシビリティ</h3>
              <p>オンラインを活用した気軽な相談環境で、いつでもどこでもお金の悩みを解決できます。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 12a4 4 0 11-8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>長期的な<br/>伴走サポート</h3>
              <p>一度きりの提案で終わらず、ライフステージの変化に合わせた継続的なサポートを行います。</p>
            </div>
          </div>
        </section>

        <section className="strengths fadein-section">
          <h2>私の強み・大切にしていること</h2>
          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-number">01</div>
              <h3>公的資格と豊富な実務経験による<br/>「安心」のご提案</h3>
              <p>2級ファイナンシャル・プランニング技能士、生命保険協会認定TLC、住宅ローンアドバイザーなどの資格を活かし、お客様に適したプランをご提案いたします。</p>
            </div>
            <div className="strength-card">
              <div className="strength-number">02</div>
              <h3>保険・資産・事業・相続まで<br/>ワンストップでサポート</h3>
              <p>保険・資産形成・事業保障・相続まで、幅広い分野にわたって総合的にサポートいたします。ライフプランの変化にも柔軟に対応します。</p>
            </div>
            <div className="strength-card">
              <div className="strength-number">03</div>
              <h3>お気軽に相談できる<br/>親しみやすさ</h3>
              <p>お気軽にご相談いただけるよう、専門用語を使わずわかりやすい説明を心がけています。どんな些細なことでも丁寧にお答えします。</p>
            </div>
            <div className="strength-card">
              <div className="strength-number">04</div>
              <h3>お客様一人ひとりの想いに<br/>寄り添う誠実な対応</h3>
              <p>お客様の価値観、家族構成、将来の目標を理解した上でプランを作成いたします。押し売りや無理な勧誘は一切いたしません。</p>
            </div>
          </div>
        </section>

        <section className="services fadein-section">
          <h2>提供サービス</h2>
          <ul className="services-grid">
            <li>事業保証プランニング</li>
            <li>福利厚生・退職設計</li>
            <li>相続・事業承継</li>
            <li>保険コンサルティング</li>
            <li>資産形成</li>
            <li>住宅ローンアドバイザー</li>
            <li>法人コンサルティング</li>
          </ul>
        </section>

        <section className="approach fadein-section">
          <h2>私のアプローチ</h2>
          <div className="approach-content">
            <div className="approach-item">
              <h3>丁寧なヒアリング</h3>
              <p>お客様の価値観、家族構成、将来の目標まで、しっかりとお話を伺います。</p>
            </div>
            <div className="approach-item">
              <h3>わかりやすい説明</h3>
              <p>専門用語を使わず、図表やシミュレーションを用いて分かりやすくご説明します。</p>
            </div>
            <div className="approach-item">
              <h3>継続的なサポート</h3>
              <p>一度きりの提案で終わらず、ライフステージの変化に合わせてサポートします。</p>
            </div>
          </div>
        </section>

        <section className="about fadein-section">
          <h2>ファイナンシャルプランナー 油井宏介について</h2>
          <div className="profile-content">
            <div className="profile-credentials">
              <h3>🏆 保有資格</h3>
              <ul>
                <li><strong>2級ファイナンシャル・プランニング技能士</strong></li>
                <li><strong>生命保険協会認定トータル・ライフ・コンサルタント（TLC）</strong></li>
                <li><strong>住宅ローンアドバイザー</strong></li>
              </ul>
            </div>
            <p><strong>「あなたの人生に、本当に必要なものを。」</strong></p>
            <p>お客様一人ひとりの状況や目標は全く違います。<br/>だからこそ、画一的な提案はいたしません。あなたに適した解策を一緒に考えていきます。</p>
            <p>小さな疑問から大きな決断まで、どんなことでもお気軽にご相談ください。</p>
          </div>
        </section>

        <section className="testimonials fadein-section">
          <h2>お客様の声</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-header">
                <div className="stars">★★★★★</div>
                <div className="result">保険料30%削減</div>
              </div>
              <p className="quote">
                「複数の保険に加入していましたが、油井さんに見直していただいたら、保障内容はそのままで保険料が大幅に削減できました。丁寧な説明で納得して決められました。」
              </p>
              <p className="author">40代 男性 会社員</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-header">
                <div className="stars">★★★★★</div>
                <div className="result">老後資金の不安解消</div>
              </div>
              <p className="quote">
                「老後の資金計画が不安でしたが、具体的なシミュレーションを見せていただき、今から準備すべきことが明確になりました。安心して将来を考えられるようになりました。」
              </p>
              <p className="author">50代 女性 自営業</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-header">
                <div className="stars">★★★★★</div>
                <div className="result">事業承継の成功</div>
              </div>
              <p className="quote">
                「事業承継について何から手をつければよいか分からず困っていました。税金対策から後継者の育成まで、トータルでサポートしていただき本当に助かりました。」
              </p>
              <p className="author">60代 男性 経営者</p>
            </div>
          </div>
        </section>

        <section className="achievements fadein-section">
          <h2>実績で見る信頼</h2>
          <div className="achievement-grid">
            <div className="achievement-card">
              <div className="achievement-number">1,200<span>件以上</span></div>
              <p>累計相談実績</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">98<span>%</span></div>
              <p>お客様満足度</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">15<span>年</span></div>
              <p>業界経験</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">500<span>社以上</span></div>
              <p>法人サポート実績</p>
            </div>
          </div>
        </section>

        <section className="faq fadein-section">
          <h2>よくあるご質問</h2>
          <div className="faq-item">
            <h3>相談は無料ですか？</h3>
            <p>はい、初回相談は無料です。お客様の状況やニーズをヒアリングし、最適なプランをご提案いたします。</p>
          </div>
          <div className="faq-item">
            <h3>どのような準備をしていけばよいですか？</h3>
            <p>特別な準備は必要ありません。現在のお悩みや目標についてお聞かせいただければ、必要に応じて資料などをご案内いたします。</p>
          </div>
          <div className="faq-item">
            <h3>相談から契約までどのくらいかかりますか？</h3>
            <p>お客様のペースに合わせて進めていきます。じっくり検討されたい方には、十分な検討期間を設けることも可能です。</p>
          </div>
        </section>

        <SharedCTA 
          title="まずは無料相談から始めませんか？"
          description="お金に関するご相談をお受けしています。まずはお気軽にお声がけください。"
          variant="highlight"
        />
      </main>
    </BaseLayout>
  )
}