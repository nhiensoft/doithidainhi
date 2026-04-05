import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Camera,
  Landmark,
  MapPin,
  ScrollText,
} from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Trang chủ' },
  { id: 'geography', label: 'Vị trí địa lý' },
  { id: 'history', label: 'Lịch sử' },
  { id: 'culture', label: 'Văn hóa' },
  { id: 'cuisine', label: 'Ẩm thực' },
  { id: 'tourism', label: 'Du lịch' },
]


const stats = [
  {
    title: 'Vị trí chiến lược',
    desc: 'Cửa ngõ nối đồng bằng sông Hồng với Bắc Trung Bộ',
    icon: MapPin,
    url: 'https://www.youtube.com/shorts/E3IbLyj7h84',
    image: '/images/vi-tri-chien-luoc.jpg',
  },

]

const timeline = [
  {
    year: '968',
    title: 'Kinh đô Hoa Lư',
    desc: 'Đinh Bộ Lĩnh thống nhất đất nước, lập nước Đại Cồ Việt, chọn Hoa Lư làm kinh đô.',
    url: 'https://vnexpress.net/dinh-bo-linh-hoang-de-dau-tien-cua-nuoc-dai-co-viet-3748828.html',
  },
  {
    year: '980',
    title: 'Nhà Tiền Lê',
    desc: 'Lê Hoàn tiếp nối vai trò trung tâm chính trị của vùng đất Hoa Lư.',
    url: 'https://truyenhinhthanhhoa.vn/nha-nuoc-dai-co-viet-duoi-trieu-tien-le-1808116993.htm',
  },
  {
    year: '1010',
    title: 'Dời đô ra Thăng Long',
    desc: 'Hoa Lư chuyển thành cố đô, tiếp tục lưu giữ giá trị lịch sử và tín ngưỡng.',
    url: 'https://hoangthanhthanglong.vn/doi-do-quyet-dinh-lich-su/',
  },
  {
    year: 'Hiện đại',
    title: 'Di sản sống',
    desc: 'Ninh Bình trở thành trung tâm du lịch quốc gia gắn với bảo tồn bản sắc.',
    url: 'https://disansong.lovable.app/',
  },
]

const cultureCards = [
  {
    title: 'Di sản UNESCO',
    items: [
      'Nổi bật nhất là Quần thể danh thắng Tràng An – di sản văn hóa và thiên nhiên thế giới được UNESCO công nhận năm 2014.',
      'Nơi đây không chỉ có cảnh quan núi đá vôi hùng vĩ mà còn lưu giữ dấu tích khảo cổ và lịch sử lâu đời của người Việt cổ.',
    ],
    icon: Landmark,
    image: '/images/culture-unesco.jpg',
  },
  {
    title: 'Làng nghề',
    items: [
      'Ninh Bình nổi tiếng với các làng nghề truyền thống như đá mỹ nghệ Ninh Vân với những sản phẩm tinh xảo.',
      'Thêu ren Văn Lâm mang đậm nét thủ công truyền thống, gắn liền với đời sống người dân địa phương.',
    ],
    icon: ScrollText,
    image: '/images/culture-lang-nghe.jpg',
  },
  {
    title: 'Nghệ thuật dân gian',
    items: [
      'Các loại hình nghệ thuật như hát chèo, hát văn đã góp phần làm nên đời sống tinh thần đặc sắc của người dân Ninh Bình.',
      'Hệ thống lễ hội truyền thống phong phú tiếp tục được gìn giữ và phát huy qua nhiều thế hệ.',
    ],
    icon: Camera,
    image: '/images/culture-nghe-thuat.jpg',
  },
  {
    title: 'Văn hóa tâm linh',
    items: [
      'Ninh Bình là vùng đất tâm linh với nhiều công trình nổi tiếng như chùa Bái Đính – quần thể chùa lớn nhất Việt Nam.',
      'Cố đô Hoa Lư gắn liền với lịch sử dựng nước và giữ nước của dân tộc, tạo nên chiều sâu văn hóa đặc trưng.',
    ],
    icon: Landmark,
    image: '/images/culture-tam-linh.jpg',
  },
]

const foods = [
  {
    name: 'Thịt dê núi',
    region: 'Hoa Lư',
    image: '/images/thit-de-nui-new.jpg',
    desc: 'Nguyên liệu chính là thịt dê được nuôi thả tự nhiên trên các dãy núi đá, nên thịt săn chắc và ít mỡ. Khi chế biến thường kết hợp với gừng, sả, tỏi, lá chanh hoặc lá lốt, giúp khử mùi và làm dậy lên hương thơm đặc trưng rất hấp dẫn.',
  },
  {
    name: 'Cơm cháy',
    region: 'Tam Cốc',
    image: '/images/com-chay-new.jpg',
    desc: 'Được làm từ gạo nếp hoặc gạo tẻ nấu chín rồi ép và chiên giòn. Điểm đặc biệt nằm ở phần nước sốt ăn kèm, thường chế biến từ thịt dê, tim cật hoặc chà bông, tạo nên vị béo, mặn ngọt hài hòa.',
  },
  {
    name: 'Miến lươn',
    region: 'Nho Quan',
    image: '/images/mien-luon-new.jpg',
    desc: 'Sử dụng miến dong truyền thống kết hợp với lươn đồng tươi, được làm sạch kỹ để giữ vị ngọt tự nhiên. Nước dùng được ninh từ xương, thêm hành, rau răm và gia vị, tạo nên hương vị thanh nhẹ nhưng đậm đà.',
  },
  {
    name: 'Gỏi nhệch',
    region: 'Kim Sơn',
    image: '/images/goi-nhech-new.jpg',
    desc: 'Nguyên liệu chính là cá nhệch – một loại cá đặc trưng vùng nước lợ. Cá được sơ chế kỹ, trộn cùng thính gạo rang, riềng, sả, lá chanh và ăn kèm nhiều loại rau sống, tạo nên vị chua, cay, thơm rất độc đáo.',
  },
  {
    name: 'Nem Yên Mạc',
    region: 'Yên Mạc',
    image: '/images/nem-yen-mac-new.jpg',
    desc: 'Được làm từ thịt lợn tươi, bì lợn thái sợi, trộn với thính gạo và các gia vị đặc trưng. Nem được ủ tự nhiên để lên men, tạo nên vị chua nhẹ, thơm và rất riêng biệt so với các loại nem khác.',
  },
  {
    name: 'Cá kho quả gáo',
    region: 'Gia Viễn',
    image: '/images/ca-kho-qua-gao-new.jpg',
    desc: 'Cá đồng được kho cùng quả gáo rừng – một loại quả đặc trưng tạo vị chua thanh. Khi kết hợp với nước mắm, tiêu, hành và các gia vị truyền thống, món ăn mang đến hương vị đậm đà, vừa béo vừa chua nhẹ rất lạ miệng.',
  },
]


const tours = [
  {
    name: 'Tràng An',
    category: 'Di sản UNESCO',
    duration: '3-4 giờ',
    image: '/images/10982a24-7519-4cb5-8086-184c7b4ed737.png',
    url: 'https://hiddencharmresort.com/tin-tuc/gia-ve-va-kinh-nghiem-tham-quan-trang-an-51.html',
  },
  {
    name: 'Tam Cốc - Bích Động',
    category: 'Danh thắng',
    duration: '2-3 giờ',
    image: '/images/1debdefd-e199-4a6d-ab03-f5779695a648.png',
    url: 'https://share.google/jj7MqFSvROXERP31X',
  },
  {
    name: 'Cố đô Hoa Lư',
    category: 'Lịch sử',
    duration: '2 giờ',
    image: '/images/7adf1d3c-f80e-4a90-a680-926313bca662.png',
    url: 'https://share.google/3Qgm5kNccVNhk4ACn',
  },
  {
    name: 'Chùa Bái Đính',
    category: 'Tâm linh',
    duration: '3 giờ',
    image: '/images/31e2e0ce-0e39-4a82-abee-8d31a17722a9.png',
    url: null,
  },
  {
    name: 'VQG Cúc Phương',
    category: 'Sinh thái',
    duration: 'Cả ngày',
    image: '/images/2154ec6a-dd58-4f62-a489-b81b9df00716.png',
    url: 'https://share.google/vkX5mbjzo1O8oG3P5',
  },
  {
    name: 'Vân Long',
    category: 'Sinh thái',
    duration: '2-3 giờ',
    image: '/images/d8d46a60-d8fc-4554-b0b3-edf752e989e4.png',
    url: 'https://share.google/of062wBE5ARe1LEds',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(160deg,#def2c3_0%,#d8efba_48%,#cee8ad_100%)] text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#home" className="flex items-center gap-2 text-sm font-bold tracking-wide text-white sm:text-base">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400" />
            Ninh Bình Explorer
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 text-center"
      >
        <img
          src="/images/da6ed79b-70c4-4d8f-972f-31bb5b2339c2.png"
          alt="Ninh Bình"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/55 via-sky-950/70 to-slate-950/75" />

        <div className="relative z-10 mx-auto max-w-4xl text-white">
          <Badge className="mb-5 border-white/40 bg-white/15 text-white hover:bg-white/20">
            Tỉnh Ninh Bình · Việt Nam
          </Badge>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            <span className="block">Vùng Đất</span>
            <span className="bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
              Kinh Đô
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 sm:text-xl">
            Khám phá vẻ đẹp huyền diệu của Ninh Bình — nơi giao thoa giữa di sản lịch sử,
            cảnh quan non nước và văn hóa truyền thống đặc sắc.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700">
              <a href="https://youtu.be/Gvu5Bqi5Mqc?si=dUdi813aq2BckMN2" target="_blank" rel="noopener noreferrer">Khám phá ngay</a>
            </Button>
            <Button asChild variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <a href="#history">Xem lịch sử</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="geography" className="container mx-auto px-4 py-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-2xl border border-emerald-200/70 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="mb-5 bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
              Vị Trí Địa Lý
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              <p>
                Ninh Bình nằm ở phía nam đồng bằng sông Hồng, cách Hà Nội khoảng 90 km, giữ vai trò là cửa ngõ giao thoa giữa vùng Bắc Bộ và Bắc Trung Bộ. Tỉnh có vị trí địa lý khá đặc biệt khi vừa tiếp giáp đồng bằng trù phú, vừa tiếp cận khu vực đồi núi đá vôi đặc trưng. Phía bắc giáp Hà Nam, phía tây giáp Hòa Bình, phía nam giáp Thanh Hóa và phía đông giáp Nam Định, tạo điều kiện thuận lợi cho giao thương và kết nối du lịch.
              </p>
              <p>
                Điểm nổi bật trong vị trí của Ninh Bình là nằm trên trục giao thông quan trọng như quốc lộ 1A và tuyến đường sắt Bắc – Nam, giúp du khách dễ dàng di chuyển từ các trung tâm lớn. Đồng thời, khu vực này còn là nơi hội tụ nhiều danh thắng nổi tiếng như quần thể Tràng An, Tam Cốc – Bích Động, Hang Múa và chùa Bái Đính, tạo nên một không gian du lịch vừa mang giá trị tự nhiên, vừa đậm nét văn hóa – lịch sử. Nhờ vị trí chuyển tiếp độc đáo giữa đồng bằng và miền núi, Ninh Bình sở hữu cảnh quan “sơn thủy hữu tình” hiếm có, được ví như “Vịnh Hạ Long trên cạn”, trở thành điểm đến hấp dẫn trong bản đồ du lịch Việt Nam.
              </p>
            </div>
          </div>

          <div className="lg:pl-2 lg:h-full">
            <div className="grid gap-4 md:grid-cols-2 lg:h-full">
              {stats.map(({ title, desc, icon: Icon, url, image }) => (
                <Card
                  key={title}
                  className={`h-full overflow-hidden border-slate-200 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${title === 'Vị trí chiến lược' ? 'md:col-span-2' : ''} ${url ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (url) window.location.assign(url)
                  }}
                  role={url ? 'link' : undefined}
                  tabIndex={url ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (!url) return
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      window.location.assign(url)
                    }
                  }}
                >
                  {image ? (
                    <div className="aspect-video w-full overflow-hidden lg:aspect-[16/12]">
                      <img src={image} alt={title} className="h-full w-full object-cover" />
                    </div>
                  ) : null}
                  <CardHeader className="space-y-3 pb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg md:text-xl">
                      {url ? (
                        <a href={url} onClick={(e) => e.stopPropagation()} className="text-emerald-700 underline underline-offset-2">
                          {title}
                        </a>
                      ) : (
                        title
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="history" className="bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent">
                Hành Trình Lịch Sử
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              Cố đô Hoa Lư ghi dấu những cột mốc đầu tiên của nhà nước phong kiến độc lập.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <Card key={item.year + item.title} className="border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Badge className="w-fit bg-sky-50 text-sky-700 hover:bg-sky-100">{item.year}</Badge>
                  <CardTitle className="mt-2 text-lg">
                    {item.url ? (
                      <a href={item.url} className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-amber-500 to-sky-500 bg-clip-text text-transparent">
              Văn Hóa Ninh Bình
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Nơi giao thoa giữa di sản cổ đô, tín ngưỡng dân gian và làng nghề truyền thống.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Card className="border-slate-200 bg-white/90 shadow-sm">
            <CardContent className="space-y-4 p-4 sm:p-6">
              {cultureCards.map(({ title, items, icon: Icon, image }, index) => (
                <div
                  key={title}
                  className={`rounded-xl border border-emerald-100 bg-white/80 p-4 sm:p-5 ${index % 2 === 0 ? 'lg:mr-20' : 'lg:ml-20'}`}
                >
                  <div className={`grid items-start gap-4 md:gap-6 ${index % 2 === 0 ? 'md:grid-cols-[0.75fr_1.25fr]' : 'md:grid-cols-[1.25fr_0.75fr]'}`}>
                    {index % 2 === 0 ? (
                      <>
                        <div>
                          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="mb-2 text-base font-semibold text-slate-900 sm:text-lg">{title}</h3>
                          <div className="space-y-1.5">
                            {items.map((item) => (
                              <p key={item} className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="aspect-video overflow-hidden rounded-lg border border-emerald-100">
                          <img src={image} alt={title} className="h-full w-full object-cover" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="aspect-video overflow-hidden rounded-lg border border-emerald-100">
                          <img src={image} alt={title} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="mb-2 text-base font-semibold text-slate-900 sm:text-lg">{title}</h3>
                          <div className="space-y-1.5">
                            {items.map((item) => (
                              <p key={item} className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="cuisine" className="bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent">
                Ẩm Thực Ninh Bình
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              Đậm vị địa phương với các món ăn đặc sản đã trở thành thương hiệu du lịch của vùng đất cố đô.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <Card key={food.name} className="overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={food.image} alt={food.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{food.name}</CardTitle>
                  <p className="text-sm text-sky-700">{food.region}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-600">{food.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tourism" className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">
              Du Lịch Ninh Bình
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Các điểm đến tiêu biểu kết hợp thiên nhiên, tâm linh và giá trị lịch sử ngàn năm.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <Card
              key={tour.name}
              className={`overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${tour.url ? 'cursor-pointer' : ''}`}
              onClick={() => {
                if (tour.url) {
                  window.location.assign(tour.url)
                }
              }}
              onKeyDown={(e) => {
                if (!tour.url) return
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  window.location.assign(tour.url)
                }
              }}
              role={tour.url ? 'link' : undefined}
              tabIndex={tour.url ? 0 : undefined}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={tour.image} alt={tour.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="bg-sky-50 text-sky-700">
                    {tour.category}
                  </Badge>
                  <span className="text-xs font-medium text-slate-500">{tour.duration}</span>
                </div>
                <CardTitle className={tour.url ? 'text-lg text-emerald-700 underline underline-offset-2' : 'text-lg'}>
                  {tour.url ? (
                    <a
                      href={tour.url}
                      onClick={(e) => e.stopPropagation()}
                      className="text-emerald-700 underline underline-offset-2"
                    >
                      {tour.name}
                    </a>
                  ) : (
                    tour.name
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {tour.url ? (
                  <Button asChild size="sm" variant="outline" className="w-full border-slate-300 hover:bg-slate-100">
                    <a href={tour.url} onClick={(e) => e.stopPropagation()}>
                      Mở liên kết
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="w-full border-slate-300 hover:bg-slate-100">
                    Xem chi tiết
                  </Button>
                )}
                <div className="grid grid-cols-3 gap-2">
                  <Button asChild size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">
                    <a href="https://www.agoda.com/vi-vn/region/ninh-binh-province-vn.html?site_id=1788345&tag=142034b6-2aab-43a6-87a3-1ad973cbafd4&utm_source=coccoc_context&utm_medium=CPC&utm_campaign=Search_Vietnam_Additional+Location&utm_term=du+l%E1%BB%8Bch+tr%C3%A0ng+an&utm_content=44938855&ctm_event_id=4198373623&ds=d%2Fc5mSw4bVAwCUtk" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      Đặt phòng
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-sky-600 text-white hover:bg-sky-700">
                    <a href="https://dulichthesinh.vn/ninh-binh/ninh-binh-1-ngay/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=Du%20L%E1%BB%8Bch%20Ninh%20B%C3%ACnh%20HN%20hcm&utm_term=tour%20tr%C3%A0ng%20an&utm_content=43459601&ctm_event_id=1105198537" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      Đặt tour
                    </a>
                  </Button>
                  <Button size="sm" className="bg-amber-500 text-white hover:bg-amber-600">
                    Giá vé
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t bg-slate-900/95 py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-sm text-white/75 sm:flex-row">
          <p>© {new Date().getFullYear()} Ninh Bình Explorer</p>
          <p>React + shadcn/ui + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
