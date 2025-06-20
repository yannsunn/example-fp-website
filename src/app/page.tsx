import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OptimizedClientAnimation from '@/components/OptimizedClientAnimation'
import CTAButton from '@/components/CTAButton'
import '../styles/index.css'

export const metadata: Metadata = {
  title: 'ホーム',
  description: 'ファイナンシャルプランナー田中太郎の公式サイト。保険・資産形成・事業保障までトータルにサポートし、一人ひとりの人生に「安心」と「希望」を届けます。',
  keywords: ['ファイナンシャルプランナー', '保険相談', '資産形成', '無料相談'],
  openGraph: {
    title: '田中太郎 | ファイナンシャルプランナー',
    description: '保険・資産形成・事業保障までトータルにサポート。一人ひとりの人生に「安心」と「希望」を届けます。',
    url: 'https://example.yuikosuke-website.vercel.app',
    siteName: '田中太郎 FP事務所',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function HomePage() {

  return (
    <>
      <OptimizedClientAnimation />
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
      <Header title="FPコンサルティング" />
      
      <main>
        <section className="hero fadein-section">
          <div className="hero-container">
            <div className="hero-image-modern">
              <Image 
                src="/placeholder.jpg" 
                alt="ファイナンシャルプランナー田中太郎のプロフィール写真" 
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
                <CTAButton variant="line" href="/contact">LINEで無料相談</CTAButton>
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
              <div className="benefit-icon">📋</div>
              <h3>一人ひとりに合わせた<br/>オーダーメイドプラン</h3>
              <p>あなたの価値観やライフプランに合わせた、最適な金融商品とプランニングをご提案します。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔍</div>
              <h3>中立的な視点での<br/>アドバイス</h3>
              <p>特定の金融機関に縛られない、お客様の利益を最優先した中立的なアドバイスを提供します。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💬</div>
              <h3>気軽に相談できる<br/>アクセシビリティ</h3>
              <p>LINEを活用した気軽な相談環境で、いつでもどこでもお金の悩みを解決できます。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
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
              <p>2級ファイナンシャル・プランニング技能士、生命保険協会認定TLC、住宅ローンアドバイザーなど多数の資格と20年の実務経験で、あなたに最適なプランをご提案。複雑な金融商品の中から、本当に必要なものだけを厳選し、安心してお任せいただけるサービスを提供します。</p>
            </div>
            <div className="strength-card">
              <div className="strength-number">02</div>
              <h3>保険・資産・事業・相続まで<br/>ワンストップでサポート</h3>
              <p>一つの窓口ですべてのお金の悩みを解決。複数の専門家を探す手間なく、人生の各ステージに応じた総合的なプランニングを提供。ライフプランの変化にも柔軟に対応し、長期的な視点でお客様の資産と将来を守ります。</p>
            </div>
            <div className="strength-card">
              <div className="strength-number">03</div>
              <h3>LINEで気軽に相談できる<br/>親しみやすさ</h3>
              <p>「専門家に相談するのは敷居が高い...」そんな心配は無用です。LINEでお気軽にご相談いただけ、専門用語を使わずわかりやすい説明を心がけています。24時間以内にお返事し、どんな些細なことでも丁寧にお答えします。</p>
            </div>
            <div className="strength-card">
              <div className="strength-number">04</div>
              <h3>お客様一人ひとりの想いに<br/>寄り添う誠実な対応</h3>
              <p>お客様の価値観、家族構成、将来の夢まで、すべてを理解した上でプランを作成。押し売りや無理な勧誘は一切せず、お客様のペースに合わせて進めます。「この人になら安心して任せられる」と思っていただける信頼関係を大切にしています。</p>
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
          <CTAButton variant="more" href="/services">サービス詳細を見る</CTAButton>
        </section>

        <section className="testimonials fadein-section">
          <h2>お客様の声</h2>
          <div className="testimonials-grid">
            <div className="testimonial highlighted">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="result">年間保険料 <strong>18万円削減</strong></div>
              </div>
              <div className="quote">「複雑な保険の見直しをとてもわかりやすく説明してくれました。本当に必要な保障だけに絞り込んでいただき、無駄な保険料を大幅に削減できて感謝しています。浮いたお金で子どもの習い事を始めることができました！」</div>
              <div className="author">東京都 40代 会社員 A様</div>
            </div>
            <div className="testimonial highlighted">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="result">事業リスク <strong>完全対策</strong></div>
              </div>
              <div className="quote">「事業保障について相談しましたが、自分では全く気づかなかったリスクまで丁寧に指摘・対策してくれて本当に助かりました。これで安心して事業に専念できます。田中さんに相談して本当に良かったです。」</div>
              <div className="author">神奈川県 50代 経営者 B様</div>
            </div>
            <div className="testimonial highlighted">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="result">教育資金 <strong>800万円確保</strong></div>
              </div>
              <div className="quote">「子どもの教育資金について相談したところ、具体的な数字とプランを提示してくれて、将来への不安が完全に解消されました。20年後まで見通せるプランで、夫婦ともに安心して子育てに集中できています。」</div>
              <div className="author">埼玉県 30代 共働き夫婦 C様</div>
            </div>
          </div>
        </section>

        <section className="about fadein-section">
          <h2>ファイナンシャルプランナー 田中太郎について</h2>
          <div className="profile-content">
            <div className="profile-credentials">
              <h3>🏆 保有資格・実績</h3>
              <ul>
                <li><strong>2級ファイナンシャル・プランニング技能士</strong></li>
                <li><strong>生命保険協会認定トータル・ライフ・コンサルタント（TLC）</strong></li>
                <li><strong>住宅ローンアドバイザー</strong></li>
                <li><strong>相談実績：2,000組以上</strong></li>
                <li><strong>顧客満足度：98%</strong></li>
              </ul>
            </div>
            <p><strong>「あなたの人生に、本当に必要なものを。」</strong></p>
            <p>私の使命は、お客様の人生に「安心」と「希望」を届けることです。<br/>20年間この業界に携わる中で学んだのは、<strong>お客様一人ひとりの人生は全く違う</strong>ということ。<br/>だからこそ、画一的な提案は一切せず、あなただけの最適解を一緒に見つけていきます。</p>
            <p>「こんなこと聞いても大丈夫？」という小さな疑問から、人生を左右する大きな決断まで、<br/><strong>どんなことでもお気軽にご相談ください。</strong></p>
          </div>
          <CTAButton variant="more" href="/about">プロフィールを見る</CTAButton>
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

        <section className="cta fadein-section">
          <h2>まずは無料相談から始めませんか？</h2>
          <div className="cta-highlight">
            <div className="cta-benefits">
              <div className="cta-benefit">
                <span className="icon">💰</span>
                <span>初回相談完全無料</span>
              </div>
              <div className="cta-benefit">
                <span className="icon">⏰</span>
                <span>24時間以内にお返事</span>
              </div>
              <div className="cta-benefit">
                <span className="icon">📱</span>
                <span>LINEで気軽に相談OK</span>
              </div>
              <div className="cta-benefit">
                <span className="icon">🤝</span>
                <span>無理な勧誘は一切なし</span>
              </div>
            </div>
            <p>あなたの「安心」と「希望」のある未来のために、<br/>まずは気軽にご連絡ください。<strong>きっと良い答えが見つかります。</strong></p>
          </div>
          <div className="cta-buttons">
            <CTAButton variant="line" href="/contact">LINEで相談</CTAButton>
            <CTAButton variant="mail" href="mailto:sample@example.com" external>メールで問い合わせ</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  )
}