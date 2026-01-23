const informationItems = [
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/944',
        src: 'https://www.owndays.com/storage/information/thumbnail/84cf2a03-40e7-49bf-a150-71adff7bd923.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2026.01.19',
        categoryLabel: '通知',
        title: '2026年OWNDAYS官方網站 過年出貨公告',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/928',
        src: 'https://www.owndays.com/storage/information/thumbnail/10e21a22-1ffb-4f06-ad60-122ffd3815c3.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2026.01.12',
        categoryLabel: '通知',
        title: '騰躍馬年 好運一路發！',
    },
    {
        category: 'press',
        link: '/tw/zh_tw/information/874',
        src: 'https://www.owndays.com/storage/information/thumbnail/c9eee0a1-6c14-4748-b001-3e49e9cee8c6.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.12.23',
        categoryLabel: '新聞稿',
        title: '木村拓哉新廣告第2彈公開！首次與鱷魚共同演出！？推薦專為大人設計的多焦點眼鏡',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/897',
        src: 'https://www.owndays.com/storage/information/thumbnail/85e464c0-0304-4438-99ec-5a4e5105fec9.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.11.14',
        categoryLabel: '最新門市資訊',
        title: '[11/21 NEW OPEN] 新光三越嘉義店',
    },
    {
        category: 'press',
        link: '/tw/zh_tw/information/873',
        src: 'https://www.owndays.com/storage/information/thumbnail/2d577420-f6ff-438b-b024-92f6780e617c.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.11.05',
        categoryLabel: '新聞稿',
        title: '木村拓哉擔任全球大使 11月5日起，展現「不斷進化的大人」的新廣告開始播出 完全不使用動畫的岩石與金屬共存的異世界中，木村先生配戴大人的黑框眼鏡登場！',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/887',
        src: 'https://www.owndays.com/storage/information/thumbnail/7a09df9f-9e0d-4435-9a7a-2aaac69bf196.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.10.28',
        categoryLabel: '最新門市資訊',
        title: '[11/1 NEW OPEN] 竹馬店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/830',
        src: 'https://www.owndays.com/storage/information/thumbnail/19050944-a0cd-4d09-a5b1-73eeed09a58f.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.08.29',
        categoryLabel: '最新門市資訊',
        title: '[9/5 NEW OPEN] 淡水店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/813',
        src: 'https://www.owndays.com/storage/information/thumbnail/eeabc97f-0e8b-4fc3-96c5-ffb196f0ea23.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.08.25',
        categoryLabel: '通知',
        title: '歡慶週年慶 優惠再加碼',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/799',
        src: 'https://www.owndays.com/storage/information/thumbnail/ec1ddd6f-15ff-48d5-9fb8-ce18149525f6.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.07.25',
        categoryLabel: '最新門市資訊',
        title: '[8/1 NEW OPEN] 新月廣場店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/794',
        src: 'https://www.owndays.com/storage/information/thumbnail/c4e175e1-61a4-487e-9dc9-a3ca85544fc1.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.07.18',
        categoryLabel: '最新門市資訊',
        title: '[7/25 NEW OPEN] 統一夢廣場店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/789',
        src: 'https://www.owndays.com/storage/information/thumbnail/53a6542b-4229-42bc-82d6-13bdb5c150ad.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.07.11',
        categoryLabel: '最新門市資訊',
        title: '[7/18 NEW OPEN] 新莊民安店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/766',
        src: 'https://www.owndays.com/storage/information/thumbnail/6054735a-c58d-4892-b044-a3ec46d08b2a.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.06.20',
        categoryLabel: '通知',
        title: 'OWNDAYS x 魷魚遊戲｜好看快閃任務！',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/736',
        src: 'https://www.owndays.com/storage/information/thumbnail/93189377-9c40-447b-be9a-7aaa092ee2d7.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.05.16',
        categoryLabel: '最新門市資訊',
        title: '[5/23 NEW OPEN] 公館店',
    },
    {
        category: 'press',
        link: '/tw/zh_tw/information/697',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.04.16',
        categoryLabel: '新聞稿',
        title: '商品構成的調整',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/689',
        src: 'https://www.owndays.com/storage/information/thumbnail/97d0d89b-0246-48cb-84eb-b10825d538a6.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.04.07',
        categoryLabel: '通知',
        title: '【官方網站線上配鏡】第2副享75折',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/695',
        src: 'https://www.owndays.com/storage/information/thumbnail/6b324464-70a0-4b84-8396-e1d124110245.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.03.21',
        categoryLabel: '最新門市資訊',
        title: '[3/28 NEW OPEN] 新店佳瑪店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/688',
        src: 'https://www.owndays.com/storage/information/thumbnail/e2b7d409-9130-4010-8d2a-5d4bd6f1fdb5.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.03.14',
        categoryLabel: '最新門市資訊',
        title: '[3/20 NEW OPEN] Lalaport南港店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/663',
        src: 'https://www.owndays.com/storage/information/thumbnail/effe2b14-80a4-4fae-b4c4-be99d3dff7dd.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2025.01.23',
        categoryLabel: '通知',
        title: '買眼鏡更快速！全新自助受理、自助結帳與取件服務，提升購物效率與體驗！',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/541',
        src: 'https://www.owndays.com/storage/information/thumbnail/e2be5472-23de-49f6-ab88-d86ab80c389f.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.12.24',
        categoryLabel: '通知',
        title: '【官方網站限定】 一年內再購入享500元優惠',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/639',
        src: 'https://www.owndays.com/storage/information/thumbnail/c680bf94-89c6-4812-a1fd-1d8bfb9586bd.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.12.13',
        categoryLabel: '最新門市資訊',
        title: '[12/21 NEW OPEN] 澎湖三號港店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/620',
        src: 'https://www.owndays.com/storage/information/thumbnail/b5d7199f-6794-4b0b-b50e-9c3f57380ba3.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.11.08',
        categoryLabel: '最新門市資訊',
        title: '[11/15 NEW OPEN] 環球桃園A8店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/619',
        src: 'https://www.owndays.com/storage/information/thumbnail/ce7a9571-2b51-4a1d-9b9a-4434e7777a0d.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.11.05',
        categoryLabel: '通知',
        title: 'ELLE I 林映唯 I BLACK COLLECTION第二彈登場',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/615',
        src: 'https://www.owndays.com/storage/information/thumbnail/f2508642-e1fb-4aef-8d6b-84bf76e205c9.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.10.31',
        categoryLabel: '通知',
        title: '11月週年慶 2副享88折',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/609',
        src: 'https://www.owndays.com/storage/information/thumbnail/8f113f45-b7da-4842-823c-c2349aa46a65.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.10.18',
        categoryLabel: '最新門市資訊',
        title: '[10/25 NEW OPEN] 江子翠店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/595',
        src: 'https://www.owndays.com/storage/information/thumbnail/7c08d0f4-6206-4d75-898a-02fc4479a6cf.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.09.04',
        categoryLabel: '最新門市資訊',
        title: '[9/11 NEW OPEN] 高雄義享店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/585',
        src: 'https://www.owndays.com/storage/information/thumbnail/ac3ed26b-d3c3-46ac-a1ac-4857be605f17.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.07.26',
        categoryLabel: '最新門市資訊',
        title: '[8/2 NEW OPEN] 頭份大潤發店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/583',
        src: 'https://www.owndays.com/storage/information/thumbnail/93dc4eb9-5965-4ee4-92d6-b3125ef354f1.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.07.18',
        categoryLabel: '最新門市資訊',
        title: '[7/28 NEW OPEN] 南崁佳瑪店',
    },
    {
        category: 'press',
        link: '/tw/zh_tw/information/572',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.07.11',
        categoryLabel: '新聞稿',
        title: '新的品牌LOGO與概念誕生。 象徵著品牌重塑的全新設計將於七月在日本和新加坡門市公開。',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/559',
        src: 'https://www.owndays.com/storage/information/thumbnail/42bb05e5-09f5-4e80-9684-2d72056928ee.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.06.19',
        categoryLabel: '最新門市資訊',
        title: '[6/26 NEW OPEN] 中原家樂福店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/332',
        src: 'https://www.owndays.com/storage/information/thumbnail/413c49ea-4960-4904-a03a-0e37bbb13864.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.04.11',
        categoryLabel: '通知',
        title: 'Happy Birthday 會員獨享生日8折優惠送給您!',
    },
    // ข้อมูลใหม่ที่เพิ่มเข้ามา
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/537',
        src: 'https://www.owndays.com/storage/information/thumbnail/a322b8cb-3c73-4ca0-8f72-529b429b2a34.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.03.27',
        categoryLabel: '最新門市資訊',
        title: '[4/3 NEW OPEN] 石牌店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/518',
        src: 'https://www.owndays.com/storage/information/thumbnail/08cbee08-321d-475f-95e1-ca40ec36a35e.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2024.01.29',
        categoryLabel: '最新門市資訊',
        title: '[2/2 NEW OPEN] 竹圍店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/507',
        src: 'https://www.owndays.com/storage/information/thumbnail/f00175b8-63e8-4191-a6f3-4f2a03fec0bc.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2023.12.20',
        categoryLabel: '最新門市資訊',
        title: '[12/27 NEW OPEN] 台北永康店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/472',
        src: 'https://www.owndays.com/storage/information/thumbnail/8a1ec053-31f5-4ada-965d-9cd8b593fddd.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2023.09.29',
        categoryLabel: '最新門市資訊',
        title: '[10/6 NEW OPEN] 高雄SKM Park',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/465',
        src: 'https://www.owndays.com/storage/information/thumbnail/cfba194c-7346-4c07-a974-75d3f0eda611.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2023.09.15',
        categoryLabel: '最新門市資訊',
        title: '[9/22 NEW OPEN] 高雄漢神百貨店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/453',
        src: 'https://www.owndays.com/storage/information/thumbnail/ed268a01-121d-455b-b841-a5aa432bb8db.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2023.07.07',
        categoryLabel: '最新門市資訊',
        title: '[7/14 NEW OPEN] 三峽店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/448',
        src: 'https://www.owndays.com/storage/information/thumbnail/2a573f25-85eb-404e-9f51-14979e5cee35.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2023.06.22',
        categoryLabel: '最新門市資訊',
        title: '[6/29 NEW OPEN] 新光三越台中中港店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/424',
        src: 'https://www.owndays.com/storage/information/thumbnail/8d259804-1ddc-412a-bee2-e64b16ca3d24.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2023.04.20',
        categoryLabel: '最新門市資訊',
        title: '[4/27 NEW OPEN] Mitsui Shopping Park LaLaport 台中店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/353',
        src: 'https://www.owndays.com/storage/information/thumbnail/7d7a1f0c-2f76-4fba-8044-a35e49c1b522.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.11.22',
        categoryLabel: '最新門市資訊',
        title: '[12/1 NEW OPEN] 竹北享平方店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/333',
        src: 'https://www.owndays.com/storage/information/thumbnail/d12e03a0-bcd9-40ac-bee0-773a8c8a14be.webp',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.10.04',
        categoryLabel: '最新門市資訊',
        title: '[10/6 NEW OPEN] 新莊宏匯店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/319',
        src: 'https://www.owndays.com/storage/information/thumbnail/dc800b8c-5e85-42ae-8696-970473b24d46.jpeg',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.09.14',
        categoryLabel: '最新門市資訊',
        title: '[9/21 NEW OPEN] 板橋愛買店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/298',
        src: 'https://www.owndays.com/storage/information/thumbnail/39a58a7a-8626-48a0-9b5e-e98bbb1f4607.jpeg',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.08.12',
        categoryLabel: '最新門市資訊',
        title: '[7/1 NEW OPEN] 內湖大潤發店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/304',
        src: 'https://www.owndays.com/storage/information/thumbnail/022929eb-f718-4517-ab4d-828030cafd7e.jpeg',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.07.13',
        categoryLabel: '最新門市資訊',
        title: '[7/13 NEW OPEN] 宜蘭金東購物商場店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/291',
        src: 'https://www.owndays.com/storage/information/thumbnail/b1b72db5-bea5-4263-9184-8b8c09b56428.jpeg',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.05.19',
        categoryLabel: '最新門市資訊',
        title: '[5/26 NEW OPEN] 秀泰岡山店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/290',
        src: 'https://www.owndays.com/storage/information/thumbnail/57e5fc25-d9db-44b1-88a2-a794227bc880.jpeg',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.05.18',
        categoryLabel: '最新門市資訊',
        title: '[5/25 NEW OPEN] 台中中友店',
    },
    // ข้อมูลชุดที่ 2 เพิ่มเข้ามา
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/281',
        src: 'https://www.owndays.com/storage/information/thumbnail/ecae2ce3-5a0d-42a4-a1cc-99e8ff6ad486.jpeg',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.04.20',
        categoryLabel: '最新門市資訊',
        title: '[4/30 NEW OPEN] 三重佳瑪店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/274',
        src: 'https://www.owndays.com/storage/information/thumbnail/d1cedeaa-3fc6-4040-9fc5-b62ed9501151.jpeg',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.04.08',
        categoryLabel: '最新門市資訊',
        title: '[4/15 NEW OPEN] 新竹大魯閣店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/255',
        src: 'https://www.owndays.com/storage/information/thumbnail/df1db640-22f6-44d2-b9db-bbdf3550054c.jpeg',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.02.21',
        categoryLabel: '最新門市資訊',
        title: '[2/25 NEW OPEN] MITSUI OUTLET PARK 台南店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/248',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.01.24',
        categoryLabel: '通知',
        title: '2022 春節假期營業時間變更公告',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/245',
        src: 'https://www.owndays.com/storage/information/thumbnail/bbfa378b-736a-4e7b-8d65-3aacca5f9e4a.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2022.01.14',
        categoryLabel: '最新門市資訊',
        title: '[1/14 NEW OPEN] 遠百竹北店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/221',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.11.11',
        categoryLabel: '通知',
        title: '信箱伺服器障礙 修復通知',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/209',
        src: 'https://www.owndays.com/storage/information/thumbnail/6c2815c8-d948-4786-a775-3176c5271383.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.11.05',
        categoryLabel: '最新門市資訊',
        title: '[11/12 NEW OPEN] 秀泰台東店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/195',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.10.11',
        categoryLabel: '通知',
        title: '網站臨時維護通知',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/160',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.08.03',
        categoryLabel: '通知',
        title: '網站臨時維護通知',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/153',
        src: 'https://www.owndays.com/storage/information/thumbnail/0fb80b55-c22c-49c3-9746-250fd515ffc2.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.07.09',
        categoryLabel: '最新門市資訊',
        title: '[7/16 NEW OPEN] 高雄夢時代店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/140',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.05.26',
        categoryLabel: '通知',
        title: '因應疫情升溫警戒，有關各門市營業時間調整變動公告'
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/115',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.02.09',
        categoryLabel: '通知',
        title: '農曆春節假期營業時間',
    },
    {
        category: '',
        link: '/tw/zh_tw/information/114',
        src: 'https://www.owndays.com/storage/information/thumbnail/d9966431-26ca-49d3-af89-486efee0e6e2.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '',
        categoryLabel: '',
        title: '[2/7 RE-OPENING] 忠孝敦化店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/110',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.02.01',
        categoryLabel: '通知',
        title: '網站臨時維護通知',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/107',
        src: 'https://www.owndays.com/storage/information/thumbnail/d7cb4645-67e3-4eb6-8f8a-a630bdade47b.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.01.25',
        categoryLabel: '最新門市資訊',
        title: '[1/29 NEW OPEN] 花蓮遠百店',
    },
    // ข้อมูลชุดที่ 3 เพิ่มเข้ามา
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/104',
        src: 'https://www.owndays.com/storage/information/thumbnail/209172ea-c284-48b8-ad8d-1190b4ae3748.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2021.01.09',
        categoryLabel: '最新門市資訊',
        title: '[1/15 NEW OPEN] 員林大潤發店',
    },
    {
        category: '',
        link: '/tw/zh_tw/information/95',
        src: 'https://www.owndays.com/storage/information/thumbnail/2866b3d3-b3df-4124-8931-21d61c705576.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '',
        categoryLabel: '',
        title: '[12/17 RE-OPENING] 台中廣三SOGO店',
    },
    {
        category: '',
        link: '/tw/zh_tw/information/86',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '',
        categoryLabel: '',
        title: '[9/11 RE-OPENING] 京站店',
    },
    {
        category: '',
        link: '/tw/zh_tw/information/87',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '',
        categoryLabel: '',
        title: '[9/11 RE-OPENING] 台北忠孝SOGO店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/84',
        src: 'https://www.owndays.com/storage/information/thumbnail/886bf6cf-53ff-4c47-85a7-e6806e0a2116.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2020.07.15',
        categoryLabel: '最新門市資訊',
        title: '[7/15 NEW OPEN] 新光影城桃園高鐵站店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/85',
        src: 'https://www.owndays.com/storage/information/thumbnail/ddf0cbd4-f213-4cce-b2b9-a11d305b90bf.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2020.06.12',
        categoryLabel: '最新門市資訊',
        title: '[6/19 NEW OPEN] 蘆洲佳瑪店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/77',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2020.06.05',
        categoryLabel: '通知',
        title: '【最新公告】有關鋼彈頭型眼鏡盒與鋼彈聯名眼鏡預購商品延後發送',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/83',
        src: 'https://www.owndays.com/storage/information/thumbnail/d8a9b53f-8254-42c6-8834-bc32ff8342f1.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2020.04.01',
        categoryLabel: '最新門市資訊',
        title: '[4/1 NEW OPEN] 八德廣豐店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/65',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2020.03.26',
        categoryLabel: '通知',
        title: '【最新公告】有關鋼彈頭型眼鏡盒與鋼彈聯名眼鏡預購商品延後發送',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/82',
        src: 'https://www.owndays.com/storage/information/thumbnail/23f80afc-26f3-48b8-947a-b83653414e14.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2020.03.20',
        categoryLabel: '最新門市資訊',
        title: '[3/20 NEW OPEN] 屏東車站店',
    },
    {
        category: 'new_shop',
        link: '/tw/zh_tw/information/81',
        src: 'https://www.owndays.com/storage/information/thumbnail/3cbc2157-5903-4de5-97ff-aea9a6bd8152.png',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2020.02.20',
        categoryLabel: '最新門市資訊',
        title: '[2/20 NEW OPEN] 京站小碧潭店',
    },
    {
        category: 'information_article',
        link: '/tw/zh_tw/information/63',
        src: 'https://www.owndays.com/images/information/no-image.jpg?202407112',
        alt: '',
        onerror: "this.src='https://www.owndays.com/images/information/no-image.jpg?202407112';",
        date: '2019.02.12',
        categoryLabel: '通知',
        title: '受新型冠狀病毒疫情影響，鋼彈頭型眼鏡盒與鋼彈聯名眼鏡預購商品將延遲寄送',
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.p-information-list__categories a');
    const categoryItems = document.querySelectorAll('.p-information-list__categories li');
    const informationItemsContainer = document.querySelector('.p-information-list__block');

    const paginationContainer = document.getElementById('pagination-container');
    const itemsPerPage = 15;
    let currentPage = 1;

    function renderInformationItems(filteredCategory = null) {
        informationItemsContainer.innerHTML = '';

        // Filter items first
        const filteredItems = informationItems.filter(item => {
            return !filteredCategory || item.category === filteredCategory;
        });

        // Calculate pagination
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedItems = filteredItems.slice(startIndex, endIndex);

        paginatedItems.forEach(item => {
            const li = document.createElement('li');
            li.setAttribute('data-category', item.category);

            li.innerHTML = `
                <a href="${item.link}" target="_self">
                    <img oncontextmenu="return false;" ondragstart="return false;"
                            src="${item.src}"
                            alt="${item.alt}"
                            onerror="${item.onerror}"
                            class="block-image">
                </a>
                <div>
                    <p class="days">
                        ${item.date && item.date + ' | ' + item.categoryLabel}
                    </p>
                    <a href="${item.link}" target="_self" class="title-list">
                        <h3>${item.title}</h3>
                    </a>
                </div>
            `;
            informationItemsContainer.appendChild(li);
        });

        renderPagination(filteredItems.length, filteredCategory);
    }

    function renderPagination(totalItems, filteredCategory) {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        if (totalPages <= 1) return;

        // Previous Button
        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        if (currentPage === 1) {
            prevLi.innerHTML = `<span aria-hidden="true" class="page-link">‹</span>`;
        } else {
            prevLi.innerHTML = `<a href="#" class="page-link" data-page="${currentPage - 1}">‹</a>`;
        }
        paginationContainer.appendChild(prevLi);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageLi = document.createElement('li');
            pageLi.className = `page-item ${i === currentPage ? 'active' : ''}`;
            if (i === currentPage) {
                pageLi.innerHTML = `<span class="page-link">${i}</span>`;
                pageLi.setAttribute('aria-current', 'page');
            } else {
                pageLi.innerHTML = `<a href="#" class="page-link" data-page="${i}">${i}</a>`;
            }
            paginationContainer.appendChild(pageLi);
        }

        // Next Button
        const nextLi = document.createElement('li');
        nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        if (currentPage === totalPages) {
            nextLi.innerHTML = `<span aria-hidden="true" class="page-link">›</span>`;
        } else {
            nextLi.innerHTML = `<a href="#" class="page-link" data-page="${currentPage + 1}">›</a>`;
        }
        paginationContainer.appendChild(nextLi);

        // Add event listeners to pagination links
        paginationContainer.querySelectorAll('a.page-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = parseInt(this.getAttribute('data-page'));

                // Update URL with page parameter
                const url = new URL(window.location.href);
                url.searchParams.set('page', currentPage);
                window.history.pushState({}, '', url);

                renderInformationItems(filteredCategory);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    function filterByCategory(category, page = 1) {
        currentPage = page;
        // Update active state in menu
        categoryItems.forEach(li => {
            const link = li.querySelector('a');
            const url = new URL(link.href, window.location.origin);
            const linkCategory = url.searchParams.get('category');

            // Support mapping for ALL, information_article, etc.
            // The links in menu use ?category=information_article
            // But ALL has null/no category param

            if ((!category && !linkCategory) || (category === linkCategory)) {
                li.classList.add('is-current');
            } else {
                li.classList.remove('is-current');
            }
        });

        renderInformationItems(category);
    }

    // Handle click on category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const url = new URL(this.href, window.location.origin);
            const category = url.searchParams.get('category');

            // Update URL without reload, reset to page 1
            const newUrl = new URL(this.href, window.location.origin);
            newUrl.searchParams.delete('page');
            window.history.pushState({}, '', newUrl);

            filterByCategory(category, 1);
        });
    });

    // Initial render
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category');
    const initialPage = parseInt(urlParams.get('page')) || 1;
    filterByCategory(initialCategory, initialPage);

    // Handle back/forward browser buttons
    window.addEventListener('popstate', function () {
        const urlParams = new URLSearchParams(window.location.search);
        filterByCategory(urlParams.get('category'), parseInt(urlParams.get('page')) || 1);
    });
});