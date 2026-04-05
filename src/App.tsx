import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Camera,
  ChevronLeft,
  Clock,
  Globe,
  Landmark,
  MapPin,
  PlayCircle,
  ScrollText,
  Tag,
  X,
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
    image: '/images/kinh-do-hoa-lu.png',
  },
  {
    year: '980',
    title: 'Nhà Tiền Lê',
    desc: 'Lê Hoàn tiếp nối vai trò trung tâm chính trị của vùng đất Hoa Lư.',
    url: 'https://truyenhinhthanhhoa.vn/nha-nuoc-dai-co-viet-duoi-trieu-tien-le-1808116993.htm',
    image: '/images/nha-tien-le.png',
  },
  {
    year: '1010',
    title: 'Dời đô ra Thăng Long',
    desc: 'Hoa Lư chuyển thành cố đô, tiếp tục lưu giữ giá trị lịch sử và tín ngưỡng.',
    url: 'https://hoangthanhthanglong.vn/doi-do-quyet-dinh-lich-su/',
    image: '/images/thang-long.png',
  },
  {
    year: 'Hiện đại',
    title: 'Di sản sống',
    desc: 'Ninh Bình trở thành trung tâm du lịch quốc gia gắn với bảo tồn bản sắc.',
    url: 'https://disansong.lovable.app/',
    image: '/images/ninh-binh.png',
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

type Food = {
  name: string
  region: string
  image: string
  desc: string
  readTime: string
  tags: string[]
  article: {
    intro: string
    sections: { heading: string; body: string }[]
    tip: string
  }
}

const foods: Food[] = [
  {
    name: 'Thịt dê núi',
    region: 'Hoa Lư',
    image: '/images/thit-de-nui-new.jpg',
    desc: 'Nguyên liệu chính là thịt dê được nuôi thả tự nhiên trên các dãy núi đá, nên thịt săn chắc và ít mỡ. Khi chế biến thường kết hợp với gừng, sả, tỏi, lá chanh hoặc lá lốt, giúp khử mùi và làm dậy lên hương thơm đặc trưng rất hấp dẫn.',
    readTime: '4 phút đọc',
    tags: ['Đặc sản', 'Hoa Lư', 'Thịt dê'],
    article: {
      intro: 'Thịt dê núi Hoa Lư là món ăn nổi danh gắn liền với vùng cố đô ngàn năm tuổi. Những chú dê được thả tự nhiên trên các vách núi đá vôi hiểm trở, ăn cỏ dại và lá rừng suốt ngày, tạo nên thịt săn chắc, ít mỡ, mang hương vị núi rừng đặc trưng không nơi nào có được.',
      sections: [
        {
          heading: 'Nguồn gốc và vùng nguyên liệu',
          body: 'Khu vực Hoa Lư – Tràng An với địa hình núi đá karst dày đặc là môi trường lý tưởng cho dê phát triển tự nhiên. Dê leo núi cả ngày, cơ bắp khỏe, thịt không có mùi hôi đặc trưng của dê nuôi chuồng. Người dân địa phương đã chăn nuôi và chế biến thịt dê theo phương thức truyền thống từ hàng trăm năm nay.',
        },
        {
          heading: 'Cách chế biến truyền thống',
          body: 'Thịt dê được sơ chế sạch, ướp với sả, gừng, tỏi, lá chanh và các gia vị bản địa trong vài tiếng. Các món phổ biến nhất gồm: dê tái chanh – thịt thái mỏng chần qua nước sôi, ăn kèm nước chấm chanh ớt; dê nướng lá lốt – cuộn thịt trong lá lốt rồi nướng than hồng; và lẩu dê – nồi nước dùng ninh từ xương dê thơm phức, ăn kèm rau rừng.',
        },
        {
          heading: 'Hương vị và trải nghiệm',
          body: 'Thịt dê núi Hoa Lư có màu đỏ tươi, dai mà không cứng, thơm mùi đặc trưng. Khi ăn kèm bánh tráng, rau thơm và chén nước chấm chua ngọt, mỗi miếng thịt gợi lên cảm giác hoang dã, thanh khiết của núi rừng Ninh Bình. Đây là món không thể thiếu trên mâm cơm của người Hoa Lư trong các dịp lễ hội và đón khách quý.',
        },
      ],
      tip: 'Ghé các nhà hàng ven đường Tràng An hoặc khu vực Hoa Lư vào buổi trưa để thưởng thức dê tươi nhất trong ngày. Nên gọi thêm cơm cháy ăn kèm để trọn vẹn bữa ăn Ninh Bình.',
    },
  },
  {
    name: 'Cơm cháy',
    region: 'Tam Cốc',
    image: '/images/com-chay-new.jpg',
    desc: 'Được làm từ gạo nếp hoặc gạo tẻ nấu chín rồi ép và chiên giòn. Điểm đặc biệt nằm ở phần nước sốt ăn kèm, thường chế biến từ thịt dê, tim cật hoặc chà bông, tạo nên vị béo, mặn ngọt hài hòa.',
    readTime: '3 phút đọc',
    tags: ['Đặc sản', 'Tam Cốc', 'Cơm cháy'],
    article: {
      intro: 'Cơm cháy Ninh Bình – từ tên gọi dân dã đến thương hiệu ẩm thực được du khách cả nước biết đến. Không phải phần cơm bị cháy do nấu sơ suất, mà là sản phẩm được làm tỉ mỉ từ gạo tẻ ngon, ép mỏng rồi phơi khô và chiên vàng đến độ giòn tan lý tưởng.',
      sections: [
        {
          heading: 'Bí quyết làm cơm cháy giòn ngon',
          body: 'Gạo tẻ hoặc gạo nếp được nấu chín, để nguội rồi tán phẳng thành tấm mỏng đều. Sau đó phơi dưới nắng hoặc sấy khô tự nhiên đến khi cứng. Khi phục vụ, bánh cơm được chiên ngập dầu sôi già ở nhiệt độ cao để nở phồng đều, vàng ruộm và giòn tan mà không bị cứng.',
        },
        {
          heading: 'Nước sốt – linh hồn của món ăn',
          body: 'Phần nước sốt mới là điều tạo nên sự khác biệt. Phổ biến nhất là sốt thịt dê – thịt dê băm nhỏ xào cùng hành tây, cà chua, nêm nếm đậm đà. Ngoài ra còn có sốt tim cật dê, sốt chà bông, hay sốt hải sản cho khách ăn được đa dạng. Khi chan sốt nóng lên miếng cơm cháy giòn, tiếng xì xèo cùng làn khói thơm bốc lên là khoảnh khắc không thể quên.',
        },
        {
          heading: 'Ý nghĩa văn hóa và du lịch',
          body: 'Cơm cháy xuất hiện từ thời các vua chúa và dần trở thành món quà đặc trưng của Ninh Bình. Ngày nay, hàng chục cơ sở tại khu vực Tam Cốc, Hoa Lư sản xuất và đóng hộp cơm cháy làm quà biếu. Du khách có thể mang về cả kiện để chia sẻ với gia đình và bạn bè khắp nơi.',
        },
      ],
      tip: 'Khi mua cơm cháy đóng hộp làm quà, hãy chọn loại có hạn sử dụng rõ ràng và bảo quản nơi khô ráo. Ăn ngon nhất khi chan sốt nóng ngay tại chỗ trong vòng 5 phút đầu.',
    },
  },
  {
    name: 'Miến lươn',
    region: 'Nho Quan',
    image: '/images/mien-luon-new.jpg',
    desc: 'Sử dụng miến dong truyền thống kết hợp với lươn đồng tươi, được làm sạch kỹ để giữ vị ngọt tự nhiên. Nước dùng được ninh từ xương, thêm hành, rau răm và gia vị, tạo nên hương vị thanh nhẹ nhưng đậm đà.',
    readTime: '3 phút đọc',
    tags: ['Đặc sản', 'Nho Quan', 'Miến lươn'],
    article: {
      intro: 'Miến lươn Nho Quan là một trong những món ăn dân dã nhưng tinh tế nhất của vùng đất Ninh Bình. Lươn đồng – loài vật gắn bó với ruộng lúa, ao hồ nơi đây – kết hợp cùng miến dong trong vắt tạo nên bát ăn vừa thanh mát vừa ấm bụng.',
      sections: [
        {
          heading: 'Lươn đồng – nguyên liệu tươi sống đặc biệt',
          body: 'Lươn đồng Nho Quan được bắt tự nhiên hoặc nuôi ở ruộng lúa, thân dài mập, thịt ngọt và chắc hơn lươn nuôi công nghiệp. Sau khi bắt, lươn được làm sạch nhớt bằng muối và tro bếp theo cách truyền thống, sau đó hấp chín hoặc luộc sơ để dễ lọc xương. Thịt lươn được xé nhỏ hoặc để nguyên miếng tùy từng quán.',
        },
        {
          heading: 'Nước dùng và cách trình bày',
          body: 'Nước dùng được ninh từ xương lợn hoặc xương gà kết hợp với xương lươn trong nhiều giờ, tạo nên vị ngọt tự nhiên sâu. Thêm hành nướng, gừng nướng và gia vị để tạo hương thơm đặc trưng. Miến dong được trần qua nước sôi, xếp vào bát cùng thịt lươn, chan nước dùng nóng hổi, rắc hành phi, rau răm và ớt tươi.',
        },
        {
          heading: 'Giá trị dinh dưỡng và văn hóa',
          body: 'Lươn đồng giàu đạm, canxi và các vi chất có lợi cho sức khỏe. Người dân Nho Quan xem miến lươn là món ăn bổ dưỡng cho người già và trẻ em. Trong những buổi sáng mùa đông lạnh giá, bát miến lươn nóng hổi là người bạn đồng hành lý tưởng của bất kỳ ai ghé thăm vùng đất này.',
        },
      ],
      tip: 'Tìm thưởng thức miến lươn vào buổi sáng sớm hoặc chiều tối khi các quán địa phương có nguyên liệu tươi nhất. Nhớ yêu cầu thêm rau răm và ớt xanh để tăng vị thơm ngon đặc trưng.',
    },
  },
  {
    name: 'Gỏi nhệch',
    region: 'Kim Sơn',
    image: '/images/goi-nhech-new.jpg',
    desc: 'Nguyên liệu chính là cá nhệch – một loại cá đặc trưng vùng nước lợ. Cá được sơ chế kỹ, trộn cùng thính gạo rang, riềng, sả, lá chanh và ăn kèm nhiều loại rau sống, tạo nên vị chua, cay, thơm rất độc đáo.',
    readTime: '3 phút đọc',
    tags: ['Đặc sản', 'Kim Sơn', 'Gỏi nhệch'],
    article: {
      intro: 'Gỏi nhệch là đặc sản độc đáo của vùng đất ven biển Kim Sơn – nơi đồng bằng gặp biển, nơi con cá nhệch sinh trưởng trong vùng nước lợ đầy phù du dinh dưỡng. Đây là món ăn đòi hỏi kỹ thuật chế biến cao và nguyên liệu phải thật tươi.',
      sections: [
        {
          heading: 'Cá nhệch – loài đặc sản của vùng nước lợ',
          body: 'Cá nhệch (hay còn gọi là lươn biển) là loài cá sống ở vùng nước lợ ven biển Kim Sơn. Thịt cá trắng ngần, dai và có vị ngọt nhẹ đặc trưng. Để khử tanh và giữ độ tươi, cá được sơ chế ngay sau khi bắt, dùng muối và chanh để làm sạch nhớt trước khi chế biến.',
        },
        {
          heading: 'Công thức gỏi truyền thống',
          body: 'Thịt cá nhệch được thái mỏng, trộn với thính gạo rang thơm, riềng băm, sả thái, lá chanh thái chỉ, ớt tươi và chút muối. Hỗn hợp được trộn đều để gia vị thấm sâu, sau đó bày ra đĩa cùng các loại rau sống như húng quế, rau thơm, chuối xanh thái mỏng và bánh tráng.',
        },
        {
          heading: 'Nét độc đáo của ẩm thực ven biển',
          body: 'Gỏi nhệch là sự giao thoa giữa văn hóa ẩm thực đồng bằng và ven biển, thể hiện sự sáng tạo của người Kim Sơn trong việc tận dụng nguồn hải sản địa phương. Vị chua từ chanh, cay từ ớt, thơm từ thính và các loại rau tạo nên tổng thể hương vị nhiều tầng lớp, khó quên.',
        },
      ],
      tip: 'Gỏi nhệch ngon nhất khi ăn cùng rượu gạo địa phương nhẹ nhàng. Nên ghé Kim Sơn vào mùa khô (tháng 10 đến tháng 4) khi cá nhệch béo và tươi nhất trong năm.',
    },
  },
  {
    name: 'Nem Yên Mạc',
    region: 'Yên Mạc',
    image: '/images/nem-yen-mac-new.jpg',
    desc: 'Được làm từ thịt lợn tươi, bì lợn thái sợi, trộn với thính gạo và các gia vị đặc trưng. Nem được ủ tự nhiên để lên men, tạo nên vị chua nhẹ, thơm và rất riêng biệt so với các loại nem khác.',
    readTime: '3 phút đọc',
    tags: ['Đặc sản', 'Yên Mạc', 'Nem chua'],
    article: {
      intro: 'Nem Yên Mạc là niềm tự hào của làng nghề truyền thống cùng tên thuộc huyện Yên Mô. Với hơn trăm năm lịch sử, nghề làm nem nơi đây đã trở thành di sản văn hóa phi vật thể, được truyền qua nhiều thế hệ gia đình.',
      sections: [
        {
          heading: 'Nghề làm nem truyền thống',
          body: 'Nem Yên Mạc được làm hoàn toàn thủ công bởi các nghệ nhân lành nghề trong làng. Quy trình bắt đầu từ việc chọn thịt lợn tươi ngon nhất trong ngày, sau đó giã nhuyễn hoặc xay thô, trộn cùng bì lợn thái sợi mỏng, thính gạo rang vàng, tỏi, ớt và muối theo tỉ lệ bí truyền của từng gia đình.',
        },
        {
          heading: 'Quá trình lên men tự nhiên',
          body: 'Hỗn hợp được gói chặt trong lá chuối xanh hoặc lá ổi, buộc dây chặt và ủ trong nhiệt độ phòng từ 2 đến 3 ngày tùy thời tiết. Quá trình lên men tự nhiên tạo nên vị chua thanh đặc trưng, axit lactic hình thành giúp bảo quản và tạo hương vị riêng biệt không thể làm giả bằng hóa chất.',
        },
        {
          heading: 'Cách thưởng thức và bảo quản',
          body: 'Nem Yên Mạc ăn ngon nhất khi còn tươi trong vòng 5-7 ngày sau khi ủ. Ăn kèm tỏi tươi, ớt xanh và uống kèm trà xanh hoặc bia lạnh. Có thể bảo quản trong ngăn mát tủ lạnh để kéo dài thêm vài ngày mà vẫn giữ vị ngon.',
        },
      ],
      tip: 'Mua nem Yên Mạc trực tiếp tại các gia đình làng nghề để đảm bảo độ tươi và chính thống. Tránh mua nem đã đóng gói sẵn không rõ nguồn gốc bán ở các nơi khác.',
    },
  },
  {
    name: 'Cá kho quả gáo',
    region: 'Gia Viễn',
    image: '/images/ca-kho-qua-gao-new.jpg',
    desc: 'Cá đồng được kho cùng quả gáo rừng – một loại quả đặc trưng tạo vị chua thanh. Khi kết hợp với nước mắm, tiêu, hành và các gia vị truyền thống, món ăn mang đến hương vị đậm đà, vừa béo vừa chua nhẹ rất lạ miệng.',
    readTime: '4 phút đọc',
    tags: ['Đặc sản', 'Gia Viễn', 'Cá kho'],
    article: {
      intro: 'Cá kho quả gáo là món ăn mang đậm chất quê hương Gia Viễn – nơi có những cánh rừng nguyên sinh và đồng lúa trù phú. Quả gáo rừng – nguyên liệu kỳ diệu tạo nên sự khác biệt của món ăn này – chỉ mọc tự nhiên trong rừng sâu của vùng đất Ninh Bình.',
      sections: [
        {
          heading: 'Quả gáo – bí quyết hương vị độc đáo',
          body: 'Quả gáo (hay quả gáo vàng) là loại quả rừng có vị chua thanh tự nhiên, màu vàng cam khi chín. Người dân Gia Viễn thu hái quả gáo từ rừng, phơi khô hoặc dùng tươi để kho cùng cá. Vị chua từ quả gáo hoàn toàn khác với me hay chanh – nhẹ hơn, thơm hơn và hòa quyện tuyệt vời với vị béo của cá đồng.',
        },
        {
          heading: 'Kỹ thuật kho đậm đà truyền thống',
          body: 'Cá đồng (thường là cá trắm, cá chép hoặc cá rô) được làm sạch, chiên sơ qua dầu để cứng cá và không bị nát. Sau đó xếp vào nồi đất cùng quả gáo, nước mắm ngon, tiêu hạt, hành khô, ớt và đường phên. Nồi cá được đun nhỏ lửa trong 3-4 tiếng, thỉnh thoảng thêm nước để cá thấm đều gia vị và không cạn kiệt.',
        },
        {
          heading: 'Văn hóa bữa cơm gia đình',
          body: 'Cá kho quả gáo là món ăn gắn liền với ký ức tuổi thơ của người Gia Viễn. Mỗi mùa quả gáo chín (khoảng tháng 8-9 âm lịch), cả gia đình cùng vào rừng hái quả, về nhà kho nồi cá to để ăn nhiều ngày. Hương thơm của nồi cá kho lan tỏa khắp ngõ xóm là mùi quen thuộc nhất của làng quê nơi đây.',
        },
      ],
      tip: 'Cá kho quả gáo ăn ngon nhất với cơm trắng nóng và rau muống luộc. Nếu không tìm được quả gáo, có thể thay thế bằng me tươi, nhưng hương vị sẽ khác biệt đáng kể so với bản gốc.',
    },
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
    url: 'https://share.google/rCMrmdHW3ZT3FYhiU',
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

function FoodArticlePage({ food, onClose }: { food: Food; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#f8f5ee]">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 border-b border-amber-100 bg-[#f8f5ee]/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-slate-600 transition hover:bg-amber-50 hover:text-slate-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Quay lại
          </button>
          <span className="text-xs font-medium text-amber-700">Ẩm Thực Ninh Bình</span>
        </div>
      </div>

      <article className="container mx-auto px-4 pb-20 pt-10 sm:px-6">
        {/* Hero image */}
        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={food.image}
            alt={food.name}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-3xl">
        {/* Meta */}
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-amber-500" />
            {food.region}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-emerald-500" />
            {food.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {food.name}
        </h1>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {food.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Intro */}
        <p className="mb-8 text-base leading-relaxed text-slate-700 sm:text-lg">
          {food.article.intro}
        </p>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-amber-200 via-emerald-200 to-transparent" />

        {/* Sections */}
        <div className="space-y-8">
          {food.article.sections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-3 text-xl font-bold text-slate-900">{section.heading}</h2>
              <p className="text-base leading-relaxed text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Tip box */}
        <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Mẹo du lịch
          </p>
          <p className="text-sm leading-relaxed text-emerald-900">{food.article.tip}</p>
        </div>
        </div>
      </article>
    </div>
  )
}

function App() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedFood, setSelectedFood] = useState<Food | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!videoOpen) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideoOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [videoOpen])

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = 'hidden'
      videoRef.current?.play()
    } else {
      document.body.style.overflow = ''
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [videoOpen])

  return (
    <>
    {selectedFood && <FoodArticlePage food={selectedFood} onClose={() => setSelectedFood(null)} />}
    <div className="min-h-screen bg-[linear-gradient(160deg,#def2c3_0%,#d8efba_48%,#cee8ad_100%)] text-foreground">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 shadow-md shadow-black/20 backdrop-blur-md border-b border-slate-800'
          : 'bg-slate-950/85 backdrop-blur-sm border-b border-slate-800/60'
      }`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2 cursor-pointer">
            <Landmark className="h-5 w-5 text-emerald-400 transition-colors duration-150 group-hover:text-emerald-300" />
            <span className="text-base font-semibold text-white tracking-wide">
              Ninh Bình
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer rounded-md hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-150 md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="border-t border-slate-800 bg-slate-950 px-3 py-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center rounded-md px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-150 cursor-pointer"
                onClick={() => setMenuOpen(false)}
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
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => setVideoOpen(true)}>
              <PlayCircle className="mr-2 h-4 w-4" />
              Khám phá ngay
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

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <div
                key={item.year + item.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {item.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {item.year}
                    </span>
                  </div>
                )}
                <div className="p-4">
                  {!item.image && (
                    <Badge className="mb-2 w-fit bg-sky-50 text-sky-700 hover:bg-sky-100">{item.year}</Badge>
                  )}
                  <h3 className="mb-2 text-base font-bold text-slate-800">
                    {item.url ? (
                      <a href={item.url} className="text-emerald-700 hover:text-emerald-900 hover:underline underline-offset-2">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </div>
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
              <Card
                key={food.name}
                className="cursor-pointer overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                onClick={() => setSelectedFood(food)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={food.image} alt={food.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{food.name}</CardTitle>
                  <p className="text-sm text-sky-700">{food.region}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-600">{food.desc}</p>
                  <p className="mt-3 flex items-center gap-1 text-xs text-amber-700">
                    <ScrollText className="h-3.5 w-3.5" />
                    {food.readTime} · Đọc bài viết
                  </p>
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

      <footer className="bg-slate-950 text-white">
        {/* Gradient top accent */}
        <div className="h-0.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400" />

        {/* Stats row */}
        <div className="border-b border-white/10 bg-white/[0.02]">
          <div className="container mx-auto grid grid-cols-2 px-4 py-5 md:grid-cols-4">
            {[
              { value: '1', label: 'Di sản UNESCO', color: 'text-emerald-400' },
              { value: '6', label: 'Điểm du lịch tiêu biểu', color: 'text-amber-400' },
              { value: '1.000+', label: 'Năm lịch sử', color: 'text-sky-400' },
              { value: '6', label: 'Đặc sản địa phương', color: 'text-violet-400' },
            ].map((stat) => (
              <div key={stat.label} className="border-r border-white/10 px-4 py-2 text-center last:border-r-0">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="mt-0.5 text-xs text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main footer content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400" />
                <span className="text-lg font-bold tracking-wide">Ninh Bình Explorer</span>
              </div>
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50">
                Khám phá vẻ đẹp của vùng đất cố đô — nơi lịch sử ngàn năm, thiên nhiên hùng vĩ và văn hóa đặc sắc hội tụ giữa lòng miền Bắc Việt Nam.
              </p>
              <div className="flex gap-2.5">
                <a
                  href="https://youtu.be/Gvu5Bqi5Mqc?si=dUdi813aq2BckMN2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/55 transition hover:border-red-400 hover:text-red-400"
                >
                  <PlayCircle className="h-4 w-4" />
                </a>
                <a
                  href="https://disansong.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/55 transition hover:border-emerald-400 hover:text-emerald-400"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                Khám phá
              </h3>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-white/55 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div className="lg:col-span-3">
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                Điểm đến
              </h3>
              <ul className="space-y-2.5">
                {tours.map((tour) => (
                  <li key={tour.name}>
                    <a
                      href={tour.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {tour.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div className="lg:col-span-3">
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                Thông tin
              </h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm text-white/55">Tỉnh Ninh Bình, Việt Nam</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <span className="text-sm text-white/55">Cách Hà Nội khoảng 90 km</span>
                </li>
                <li className="flex items-start gap-3">
                  <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span className="text-sm text-white/55">Di sản UNESCO Tràng An (2014)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Ninh Bình Explorer · Dự án phi thương mại
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>React · shadcn/ui · Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Dialog */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40"
              aria-label="Đóng"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              ref={videoRef}
              src="/video/video.mp4"
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default App
