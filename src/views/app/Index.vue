<script setup>
</script>

<template>
    <div class="container">
        <h1 class="text-center m-0">紹介</h1>
        <h3>シフトアプリケーション</h3>
        <h5>作成背景</h5>
        <p>
            以前のアルバイト先がシフトアプリを利用しており、今の働いているアルバイト先でもシフトアプリケーションが使用できれば楽になると考えたため<br>
            今回作成したシフトアプリは利用していたアプリの不満点や欲しい機能を自分なりに考え、機能要件に組み込みました。
        </p>
        <div class="row">
            <div class="col-3">
                <h5>使用技術</h5>
                <p>
                    <span class="fs-6 fw-bold">言語</span><br>
                    Java, JavaScript, HTML, CSS, SQL<br>
                    <span class="fs-6 fw-bold">フレームワーク・ライブラリ</span><br>
                    Spring Boot, jQuery, Bootstrap, Apache POI, Apache Commons<br>
                    <span class="fs-6 fw-bold">ミドルウェア</span><br>
                    MySQL<br>
                    <span class="fs-6 fw-bold">インフラ</span><br>
                    AWS
                </p>
            </div>
            <div class="col-9">
                <h5>技術選定とその理由</h5>
                <p>
                    <span class="fs-5 fw-bold">言語</span><br>
                    Java: 経験年数が長いことと保守性の高いシステムを開発することが可能なため<br>
                    JavaScript: UIを向上させるため<br>
                    HTML, CSS: Web開発に必要なため<br>
                    SQL: ORMを利用していますが、複雑な処理に応じてSQLを書く必要があるため<br>
                    <span class="fs-5 fw-bold">フレームワーク・ライブラリ</span><br>
                    <span class="fs-6 fw-bold">Spring(主要プロジェクトのみ)</span><br>
                    Javaのフレームワークの中で一番利用されているフレームワークであり、ドキュメントや技術記事も豊富であるため<br>
                    &nbsp;&nbsp;Spring Boot: Spring Frameworkでの開発に必要であるため<br>
                    &nbsp;&nbsp;Spring Security: Spring Securityを導入しているプロジェクトが増えており、学習する必要があると感じたため。また、最新のSpring
                    Security5.7のアップデートでさらに簡素化し、Spring Securityの導入が容易であると感じたため<br>
                    &nbsp;&nbsp;Spring Data JPA: JPAかJDBCか迷いましたが、テーブルが複雑ではなく、規模が小さいこと, JDBCだとServlet, JSPと同じ開発コード量になると感じたこと,
                    また、JPAを導入しているプロジェクトも多く、学習する必要があると感じたため<br>
                    <span class="fs-6 fw-bold">jQuery</span><br>
                    Thymeleaf(テンプレートエンジン)を利用しているため、フロントエンドフレームワークを利用する必要性がなかったため<br>
                    <span class="fs-6 fw-bold">Bootstrap</span><br>
                    CSSの記述量を削減し保守性を高めるため<br>
                    <span class="fs-6 fw-bold">Apache POI</span><br>
                    Excel出力に必要だったため<br>
                    <span class="fs-6 fw-bold">Apache Commons</span><br>
                    ワンタイムパスワードのランダム文字列を作成するため<br>
                    <span class="fs-5 fw-bold">ミドルウェア</span><br>
                    MySQL: 今回のシフトアプリケーションの前提となるアプリケーションをMySQLで開発していたため。しかし、MySQLの将来性を考慮するとPostgreSQLが適切だったと感じています。<br>
                    <span class="fs-5 fw-bold">インフラ</span><br>
                    AWS: 現在の主要なクラウドがAWSであったため
                </p>
            </div>
        </div>
        <div class="col-12 row">
            <h3>シフトアプリ概要</h3>
            <div class="col-6">
                <h5>機能</h5>
                <p>
                    ・ログイン機能<br>
                    ・ユーザ登録・更新機能<br>
                    ・お知らせ機能<br>
                    ・シフト登録機能<br>
                    ・シフト編集機能<br>
                    ・DM機能<br>
                    ・登録済みシフトExcel出力機能<br>
                    ・シフト未提出ユーザへメール送信機能(月次バッチ)
                </p>
            </div>
            <div class="col-6">
                <h5>注意点</h5>
                <p>
                    ・作成したアプリケーション及びソースコードは全て作成者である私に属します。採用・評価目的以外での再配布及び利用を禁止します。(URLも含む)<br>
                    ・公序良俗の範囲内で利用してください。<br>
                    ・登録済みのユーザの全てのパスワードは1234で固定されています。<br>
                    &nbsp;&nbsp;管理者: [ユーザID] A001, [パスワード] 1234<br>
                    &nbsp;&nbsp;一般ユーザ: [ユーザID] A100～A114, [パスワード] 1234
                </p>
            </div>
        </div>
        <p>
            &nbsp;&nbsp;管理者: [ユーザID] A001, [パスワード] 1234<br>
            &nbsp;&nbsp;一般ユーザ: [ユーザID] A100～A114, [パスワード] 1234
        </p>
        <router-link to="/login" class="btn btn-primary mb-4">ログインする</router-link>
    </div>
</template>