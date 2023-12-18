# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding the db..."

lush = User.create(
    username: "lush_company",
    password: "password",
    password_confirmation: "password",
    userable: Company.new(
        name: "Lush",
        industry: "Cosmetics",
        image_url: "https://i.scdn.co/image/ab6775700000ee8"
    )
)

human_made = User.create(
    username: "hm_company",
    password: "password",
    password_confirmation: "password",
    userable: Company.new(
        name: "Human Made",
        industry: "Clothing",
        image_url: "https://hotel-the-knot.jp/sapporo/wp-content/themes/wp-theme-hoteltheknot-sapporo/assets/images/human-made-sapporo/logo.png?d=202308221620"
    )
)

billboards = User.create(
    username: "bb_agency",
    password: "password",
    password_confirmation: "password",
    userable: Agency.new(
        name: "Billboard Advertising",
        market: "Billboards",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Billboard-logo-magazine.jpg"
    )
)

magazines = User.create(
    username: "mag_agency",
    password: "password",
    password_confirmation: "password",
    userable: Agency.new(
        name: "Magazine Advertising",
        market: "Magazines",
        image_url: "https://cdn-icons-png.flaticon.com/512/8896/8896458.png"
    )
)

lush.userable.ads.create(
    product: "Scrubee Body Butter",
    content: "This happy little bee looks innocent enough, but it means business when it comes to buffing your skin 
    smooth. We've combined scrubby ground almonds and coconut shell with softening honey, cocoa and shea 
    butter in alternating exfoliating and moisturizing stripes for the smoothest skin.",
    image_url: "https://i0.wp.com/3.bp.blogspot.com/-Cf0WUVuMBJw/WRBOhHMVa_I/AAAAAAAAUic/7HfEZGpZBwkYIiXPNvxrhb6Y6Afx1ZqOACLcB/s1600/Lush-Cosmetics-Scrubee-cocoa-butter-honey-body-scrub-balm-spring-limited-edition-2017.jpg?ssl=1",
    agency_id: billboards.userable.id
)

lush.userable.ads.create(
    product: "Charity Pot Body Lotion",
    content: "This gorgeous self-preserving body lotion does a lot of good—and not just for your skin! With a delicately 
        floral perfume of ylang ylang and rosewood oils in a hydrating cocoa butter base, Charity Pot will leave your 
        skin subtly perfumed and touchably soft. This rich and generous cream contains up to seven ingredients 
        sourced from our Sustainable Lush Fund projects that support regenerative agriculture around the world.",
    image_url: "https://img.makeupalley.com/2/3/1/0/1379025.GIF",
    agency_id: billboards.userable.id
)

lush.userable.ads.create(
    product: "Christmas Buds Advent Calendar",
    content: "Countdown to Christmas with twenty-five exciting bath products including gift exclusives like Snowman 
    Bubbleroon and Chocolate Santa Bath Bomb! Have lots of fun with not one but five Fun multi-purpose bars 
    that let you twist, turn, shape and create anything your heart desires. If that's not enough, 11 bath bombs, 
    eight bubblers and one bath melt (gift exclusive) await you in Santa's Christmas countdown workshop. Use 
    this festive home as a doll house long after your treats are gone.",
    image_url: "https://cdn.mall.adeptmind.ai/https%3A%2F%2Funicorn.lush.com%2Fmedia%2Fthumbnails%2Fproducts%2Fchristmas_buds_advent_calender_2023_e1174ad6_thumbnail_4096.png_large.webp",
    agency_id: magazines.userable.id
)

lush.userable.ads.create(
    product: "Intergalactic Shower Gel",
    content: "Fill your shower with the minty-fresh aroma of Intergalactic Bath Bomb, our worldwide bestseller. Invigorating 
        peppermint, sweet grapefruit and grounding vetivert swirl through a galaxy of plastic-free glitter, suspended 
        in the gel like stars in space. Emerge from the shower feeling refreshed and ready for adventure!",
    image_url: "https://lululovelash.files.wordpress.com/2019/06/phonto-169.png"
)

lush.userable.ads.create(
    product: "Lump Of Coal Bath Bomb",
    content: "Don't let the unassuming exterior fool you. Inside this little lump are untold hidden treasures, including 
        Brazilian orange, clove and cinnamon leaf oils for a hot toddy-inspired scent. We won't give too much away 
        and spoil the surprise, but if you like a dash of sparkle, and warm, spicy scents, this is the one for you.",
    image_url: "https://img.myshopline.com/image/store/1657790597292/LumpOfCoal2.jpeg?w=750&h=750"
)

human_made.userable.ads.create(
    product: "DAILY SHORT SLEEVE T-SHIRT",
    content: "The “DAILY” T-shirt series has a daily design that is perfect as a gift to 
        commemorate special days such as birthdays. HUMAN MADE's iconic heart 
        logo is printed large on the front, and today's date is printed large on the 
        back. This is a special design that can only be obtained today.",
    image_url: "https://humanmade.jp/cdn/shop/products/1aCBHTEyVBCOCAhO_xr-2ur39TNIl0Nhu_1000x.jpg?v=1702602110",
    agency_id: magazines.userable.id
)

human_made.userable.ads.create(
    product: "HUMAN MADE FACE TOWEL",
    content: "A HUMAN MADE original face towel that is comfortable to use with its 
        excellent water absorption and soft texture. It also features a timeless and 
        simple design that is useful for daily use.",
    image_url: "https://humanmade.jp/cdn/shop/products/1gAs5n9MvdnxeBtxIGph_4JfYtTq_yZRe_1000x.jpg?v=1702286092",
    agency_id: magazines.userable.id
)

human_made.userable.ads.create(
    product: "KAWS MADE KNIT SWEATER",
    content: "A warm and soft crew neck knit made of cashmere. Jacquard weave with 
        KAWS MADE heart logo.",
    image_url: "https://humanmade.jp/cdn/shop/products/1QEqGkoiQ9znUeiSm2hvQ-oagPe_8K-vr_1000x.jpg?v=1702609125",
    agency_id: billboards.userable.id
)

human_made.userable.ads.create(
    product: "KAWS MADE COFFEE MUG #1",
    content: "KAWS MADE mug featuring tiger animal graphics and heart logo. This is a 
        ceramic mug using an original model made by HUMAN MADE.",
    image_url: "https://humanmade.jp/cdn/shop/products/1mApkDA8IpYrPFqScouZDp8xW67bWHd1l_1000x.jpg?v=1702609168"
)

human_made.userable.ads.create(
    product: "KAWS MADE DENIM PANTS #2",
    content: "Collaboration item with artist KAWS. These denim pants are made with great 
        attention to detail, including the embroidery on the back pockets and the 
        silhouette.",
    image_url: "https://humanmade.jp/cdn/shop/products/1kRpbmgMbRhCoooAdCjU9-cvG69D1RWxO_1000x.jpg?v=1702609358"
)

puts "Done!"