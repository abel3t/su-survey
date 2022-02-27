import { IGiftQuestion, ILoveLanguageQuestion } from './interfaces';

export const enum LoveLanguageType {
  A,
  B,
  C,
  D,
  E
}

export const LoveLanguageTitle = {
  [LoveLanguageType.A]: 'Lời khen ngợi',
  [LoveLanguageType.B]: 'Thời gian chia sẻ',
  [LoveLanguageType.C]: 'Quà tặng',
  [LoveLanguageType.D]: 'Sự phục vụ',
  [LoveLanguageType.E]: 'Cử chỉ âu yếm'
};

export const LoveLanguageDescription = {
  [LoveLanguageType.A]: 'Em cảm thấy được yêu khi được nghe những lời nói động viên, khích lệ, khen ngợi, khẳng định.',
  [LoveLanguageType.B]: 'Em cảm thấy được yêu khi người khác dành thời gian chia sẻ với em, lắng nghe em tâm sự, dành cho em sự quan tâm trọn vẹn và chú ý tuyệt đối.',
  [LoveLanguageType.C]: 'Em cảm thấy được yêu khi được nhận những món quà ý nghĩa, bất ngờ, em sẽ rất cảm kích và trân quý những món quà ấy.',
  [LoveLanguageType.D]: 'Em cảm thấy được yêu khi người khác tận tụy làm những việc để giúp đỡ, phục vụ em.',
  [LoveLanguageType.E]: 'Em cảm thấy được yêu qua những hành động tiếp xúc, cử chỉ âu yếm, những cái chạm nhẹ, bắt tay…'
}

export const loveLanguageQuestions: ILoveLanguageQuestion[] = [
  {
    id: 1,
    text: 'Câu 1',
    answers: [
      { text: 'Mình rất vui khi ai đó cảm ơn mình vì một việc mình đã làm cho họ.', type: LoveLanguageType.A },
      {
        text: 'Mình thích được ai đó cảm ơn mình bằng một cái ôm vì một việc mình đã làm cho họ.',
        type: LoveLanguageType.E
      }
    ]
  },
  {
    id: 2,
    text: 'Câu 2',
    answers: [
      { text: 'Mình cảm thấy rất vui khi ai đó dành thời gian nói chuyện với mình.', type: LoveLanguageType.B },
      { text: 'Mình cảm thấy rất vui khi ai đó giúp mình làm việc này việc kia.', type: LoveLanguageType.D }
    ]
  },
  {
    id: 3,
    text: 'Câu 3',
    answers: [
      { text: 'Mình cảm thấy rất vui khi nhận được những món quà từ bạn bè.', type: LoveLanguageType.C },
      { text: 'Mình cảm thấy rất vui khi được cùng bạn bè người thân đi chơi.', type: LoveLanguageType.B }
    ]
  },
  {
    id: 4,
    text: 'Câu 4',
    answers: [
      { text: 'Mình cảm thấy được bạn bè yêu thương khi họ giúp đỡ mình việc gì đó.', type: LoveLanguageType.D },
      { text: 'Mình cảm thấy được yêu khi ai đó ôm mình khi mình buồn.', type: LoveLanguageType.E }
    ]
  },
  {
    id: 5,
    text: 'Câu 5',
    answers: [
      { text: 'Mình cảm thấy vui và thoải mái khi khoác vai mọi người lúc chụp ảnh.', type: LoveLanguageType.E },
      { text: 'Mình biết bạn bè quan tâm đến mình vì họ luôn bất ngờ tặng quà cho mình.', type: LoveLanguageType.C }
    ]
  },
  {
    id: 6,
    text: 'Câu 6',
    answers: [
      { text: 'Mình thích cùng bạn bè người thân đi đây đó khắp nơi.', type: LoveLanguageType.B },
      { text: 'Mình thích nắm tay, choàng tay khi đi cùng người mình yêu quý.', type: LoveLanguageType.E }
    ]
  },
  {
    id: 7,
    text: 'Câu 7',
    answers: [
      { text: 'Mình trân trọng những món quà mà bạn bè người thân tặng cho mình.', type: LoveLanguageType.C },
      { text: 'Mình thích được nghe những lời khen, động viên mọi người dành cho mình.', type: LoveLanguageType.A }
    ]
  },
  {
    id: 8,
    text: 'Câu 8',
    answers: [
      {
        text: 'Mình thích nhất là được ngồi bên cạnh người mình yêu quý (có thể không cần nói gì cũng được).',
        type: LoveLanguageType.E
      },
      { text: 'Mình sẽ nhớ mãi không quên lời khen ai đó dành cho mình.', type: LoveLanguageType.A }
    ]
  },
  {
    id: 9,
    text: 'Câu 9',
    answers: [
      { text: 'Ở bên người mình yêu quý, mình cảm thấy rất thích.', type: LoveLanguageType.B },
      { text: 'Ngay cả những món quà nhỏ bé nhất cũng khiến mình vui sướng.', type: LoveLanguageType.C }
    ]
  },
  {
    id: 10,
    text: 'Câu 10',
    answers: [
      { text: 'Mình cảm thấy cực kỳ vui khi có ai đó nói rằng người ấy tự hào về mình.', type: LoveLanguageType.A },
      { text: 'Mình cảm thấy rất được quan tâm khi có ai đó nấu ăn cho mình.', type: LoveLanguageType.D }
    ]
  },
  {
    id: 11,
    text: 'Câu 11',
    answers: [
      { text: 'Mình rất vui khi được cùng với bạn bè người thân làm một việc gì đó.', type: LoveLanguageType.B },
      { text: 'Những lời động viên khích lệ của mọi người khiến cho mình rất vui.', type: LoveLanguageType.A }
    ]
  },
  {
    id: 12,
    text: 'Câu 12',
    answers: [
      { text: 'Mình trân trọng từng việc nhỏ nhất mà mọi người làm cho mình.', type: LoveLanguageType.D },
      { text: 'Mình sẵn sàng tặng cho những người mình yêu quý những cái ôm.', type: LoveLanguageType.E }
    ]
  },
  {
    id: 13,
    text: 'Câu 13',
    answers: [
      { text: 'Những lời khen tặng của mọi người rất có ý nghĩa đối với mình.', type: LoveLanguageType.A },
      { text: 'Mình gìn giữ rất kỹ những món quà mình nhận được.', type: LoveLanguageType.C }
    ]
  },
  {
    id: 14,
    text: 'Câu 14',
    answers: [
      { text: 'Chỉ quanh quẩn bên người thân bạn bè cũng làm mình thấy vui.', type: LoveLanguageType.B },
      { text: 'Mình thích được đùa nghịch & chơi đuổi bắt với bạn bè mình.', type: LoveLanguageType.E }
    ]
  },
  {
    id: 15,
    text: 'Câu 15',
    answers: [
      { text: 'Mình mong được mọi người ghi nhận khi mình đạt được thành tích nào đó.', type: LoveLanguageType.A },
      {
        text: 'Mình rất vui khi mọi người giúp mình làm những điều mà họ có thể không thích.',
        type: LoveLanguageType.D
      }
    ]
  },
  {
    id: 16,
    text: 'Câu 16',
    answers: [
      { text: 'Mình luôn yêu thích việc bắt tay hay choàng vai bạn bè mỗi lần gặp nhau.', type: LoveLanguageType.E },
      { text: 'Mình vui khi bạn bè người thân cũng thích những gì mình thích.', type: LoveLanguageType.B }
    ]
  },
  {
    id: 17,
    text: 'Câu 17',
    answers: [
      { text: 'Mình rất tin tưởng vào sự giúp đỡ của bạn bè.', type: LoveLanguageType.D },
      { text: 'Mình luôn hồi hộp khi mở những món quà mình nhận được.', type: LoveLanguageType.C }
    ]
  },
  {
    id: 18,
    text: 'Câu 18',
    answers: [
      { text: 'Mình thích được người khác khen về điểm mạnh của mình.', type: LoveLanguageType.A },
      { text: 'Mình thích được người khác lắng nghe ý kiến của mình.', type: LoveLanguageType.B }
    ]
  },
  {
    id: 19,
    text: 'Câu 19',
    answers: [
      { text: 'Mình không thể không chạm vào bạn bè người thân khi gặp họ.', type: LoveLanguageType.E },
      { text: 'Mình rất vui nếu có người phụ mình tìm một món đồ mình đang để lạc đâu đó.', type: LoveLanguageType.D }
    ]
  },
  {
    id: 20,
    text: 'Câu 20',
    answers: [
      { text: 'Mọi người xứng đáng được thưởng vì tất cả những gì họ làm cho mình.', type: LoveLanguageType.D },
      { text: 'Đôi lúc mình phải ngạc nhiên trước những món quà đầy ý nghĩa của người thân.', type: LoveLanguageType.C }
    ]
  },
  {
    id: 21,
    text: 'Câu 21',
    answers: [
      { text: 'Mình thấy vui được ai đó quan tâm lắng nghe mình nói.', type: LoveLanguageType.B },
      { text: 'Mình thích được ai đó giúp mình dọn dẹp nhà cửa, phòng ốc sạch sẽ.', type: LoveLanguageType.D }
    ]
  },
  {
    id: 22,
    text: 'Câu 22',
    answers: [
      { text: 'Cứ tới sinh nhật là mình lại mong chờ những món quà.', type: LoveLanguageType.C },
      { text: 'Lúc nào mình cũng muốn được ai đó nói rằng mình rất quan trọng với họ.', type: LoveLanguageType.A }
    ]
  },
  {
    id: 23,
    text: 'Câu 23',
    answers: [
      { text: 'Mình còn nhận được quà có nghĩa là mình còn được yêu thương.', type: LoveLanguageType.C },
      { text: 'Khi mình ra khỏi phòng hay ra khỏi nhà, mình thích có ai đó mở cửa cho mình.', type: LoveLanguageType.D }
    ]
  },
  {
    id: 24,
    text: 'Câu 24',
    answers: [
      { text: 'Mọi người ít khi ngắt lời mình, điều đó làm mình rất dễ chịu.', type: LoveLanguageType.B },
      { text: 'Mình chưa bao giờ chán việc nhận quà tặng từ ai đó.', type: LoveLanguageType.C }
    ]
  },
  {
    id: 25,
    text: 'Câu 25',
    answers: [
      { text: 'Bạn bè biết lúc nào mình gặp khó khăn và rất hay đề nghị giúp đỡ.', type: LoveLanguageType.D },
      { text: 'Đi đâu không quan trọng, có bạn bè là mình vui rồi.', type: LoveLanguageType.B }
    ]
  },
  {
    id: 26,
    text: 'Câu 26',
    answers: [
      { text: 'Mình thích được bắt tay, vỗ vai khi gặp gỡ mọi người.', type: LoveLanguageType.E },
      { text: 'Mình thích được tặng quà dù chưa đến sinh nhật của mình.', type: LoveLanguageType.C }
    ]
  },
  {
    id: 27,
    text: 'Câu 27',
    answers: [
      { text: 'Những lời động viên của mọi người giúp mình tự tin hơn.', type: LoveLanguageType.A },
      { text: 'Mình thích đi ăn uống cùng bạn bè người thân.', type: LoveLanguageType.B }
    ]
  },
  {
    id: 28,
    text: 'Câu 28',
    answers: [
      { text: 'Đối với mình, không gì tuyệt vời hơn những món quà thú vị.', type: LoveLanguageType.C },
      { text: 'Mình thấy người dễ gần là người hay vỗ vai, bắt tay.', type: LoveLanguageType.E }
    ]
  },
  {
    id: 29,
    text: 'Câu 29',
    answers: [
      { text: 'Mình rất quý những người đã giúp mình dù lúc đó họ rất bận bịu.', type: LoveLanguageType.D },
      { text: 'Mình thật sự sung sướng mỗi khi được mọi người đánh giá cao.', type: LoveLanguageType.A }
    ]
  },
  {
    id: 30,
    text: 'Câu 30',
    answers: [
      { text: 'Khi gặp lại những người bạn cũ, mình thích ôm bạn để bày tỏ sự vui mừng.', type: LoveLanguageType.E },
      { text: 'Mình thích được nghe ai đó nói người ấy luôn tin tưởng ở mình.', type: LoveLanguageType.A }
    ]
  }
];

export const enum GiftType {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L
}

export const GiftTitle = {
  [GiftType.A]: 'Giảng dạy',
  [GiftType.B]: 'Chăm sóc (Healthcare)',
  [GiftType.C]: 'Xây dựng (Builder)',
  [GiftType.D]: 'Âm nhạc',
  [GiftType.E]: 'Sáng tạo nghệ thuật',
  [GiftType.F]: 'Đầu óc phân tích',
  [GiftType.G]: 'Năng lượng thể chất',
  [GiftType.H]: 'Thông hiểu',
  [GiftType.I]: 'Quản lý/Lãnh đạo',
  [GiftType.J]: 'Cảm nhận thuộc linh',
  [GiftType.K]: 'Khôn ngoan',
  [GiftType.L]: 'Gần gũi với thiên nhiên'
};

export const giftQuestions: IGiftQuestion[] = [
  {
    id: 1,
    text: 'Con có thể dễ dàng chia sẻ suy nghĩ và cảm xúc của mình.',
    type: GiftType.A
  },
  {
    id: 2,
    text: 'Con chịu khó lắng nghe khi ai đó tâm sự với con.',
    type: GiftType.A
  }, {
    id: 3,
    text: 'Con rất giỏi kể chuyện.',
    type: GiftType.A
  },
  {
    id: 4,
    text: 'Con giỏi truyền đạt lại thông tin cho người khác hiểu.',
    type: GiftType.A
  },
  {
    id: 5,
    text: 'Con biết hướng dẫn người khác cách làm một việc gì đó.',
    type: GiftType.A
  },

  {
    id: 6,
    text: 'Con thấy buồn khi ai đó bị tổn thương.',
    type: GiftType.B
  },
  {
    id: 7,
    text: 'Con quan tâm đến cảm xúc của người khác.',
    type: GiftType.B
  },
  {
    id: 8,
    text: 'Con nhẹ nhàng từ tốn.',
    type: GiftType.B
  },
  {
    id: 9,
    text: 'Con tôn trọng suy nghĩ của người khác.',
    type: GiftType.B
  },
  {
    id: 10,
    text: 'Con giỏi an ủi người khác.',
    type: GiftType.B
  },
  {
    id: 11,
    text: 'Con giỏi xây dựng thứ gì đó.',
    type: GiftType.C
  },
  {
    id: 12,
    text: 'Con có thể tạo ra thứ gì đó từ con số không.',
    type: GiftType.C
  },
  {
    id: 13,
    text: 'Con có thể tìm ra cách kết hợp các thứ gì đó lại với nhau.',
    type: GiftType.C
  },
  {
    id: 14,
    text: 'Con thích sử dụng các nguyên liệu gỗ, kim loại.',
    type: GiftType.C
  },
  {
    id: 15,
    text: 'Con thích sử dụng bàn tay của mình.',
    type: GiftType.C
  },
  {
    id: 16,
    text: 'Con có thể dễ dàng tạo ra nhịp điệu âm nhạc.',
    type: GiftType.D
  },
  {
    id: 17,
    text: 'Con có thể hát hoặc chơi một nhạc cụ.',
    type: GiftType.D
  },
  {
    id: 18,
    text: 'Con nghe thấy giai điệu âm nhạc trong đầu.',
    type: GiftType.D
  },
  {
    id: 19,
    text: 'Con thích nghe nhạc.',
    type: GiftType.D
  },
  {
    id: 20,
    text: 'Con thích dùng âm nhạc để thờ phượng và khích lệ tinh thần người khác.',
    type: GiftType.D
  },
  {
    id: 21,
    text: 'Con có những ý tưởng sáng tạo.',
    type: GiftType.E
  },
  {
    id: 22,
    text: 'Con thể hiện bản thân một cách sáng tạo thông qua nghệ thuật, âm nhạc, hội họa,…',
    type: GiftType.E
  },
  {
    id: 23,
    text: 'Con có thể dễ dàng thiết kế một thứ gì đó.',
    type: GiftType.E
  },
  {
    id: 24,
    text: 'Con thích làm đồ thủ công.',
    type: GiftType.E
  },
  {
    id: 25,
    text: 'Con thích đề ra các kế hoạch.',
    type: GiftType.E
  },
  {
    id: 26,
    text: 'Con hay phân tích xem làm thế nào để kết hợp những thứ gì đó lại với nhau.',
    type: GiftType.F
  },
  {
    id: 27,
    text: 'Con có thể phân tích các mặt đúng, sai của một vấn đề.',
    type: GiftType.F
  },
  {
    id: 28,
    text: 'Con giỏi giải toán và giải quyết vấn đề.',
    type: GiftType.F
  },
  {
    id: 29,
    text: 'Con giỏi hình dung vấn đề.',
    type: GiftType.F
  },
  {
    id: 30,
    text: 'Con giỏi áp dụng các ý tưởng mới phù hợp với các tình huống khác nhau.',
    type: GiftType.F
  },
  {
    id: 31,
    text: 'Con giỏi môn điền kinh.',
    type: GiftType.G
  },
  {
    id: 32,
    text: 'Con thích giúp đỡ người khác.',
    type: GiftType.G
  },
  {
    id: 33,
    text: 'Con giỏi việc lao động chân tay.',
    type: GiftType.G
  },
  {
    id: 34,
    text: 'Con có sức khỏe dẻo dai.',
    type: GiftType.G
  },
  {
    id: 35,
    text: 'Con thích các hoạt động thể chất hơn là hoạt động tư duy.',
    type: GiftType.G
  },
  {
    id: 36,
    text: 'Con có thể hiểu tại sao một việc gì đó xảy ra.',
    type: GiftType.H
  },
  {
    id: 37,
    text: 'Con giỏi nắm bắt quan điểm của người khác.',
    type: GiftType.H
  },
  {
    id: 38,
    text: 'Con có thể thấu hiểu cảm xúc của người khác.',
    type: GiftType.H
  },
  {
    id: 39,
    text: 'Con có thể nhìn thấy những việc xảy ra và hiểu rằng đó chỉ là một phần của sự việc nào đó.',
    type: GiftType.H
  },
  {
    id: 40,
    text: 'Con thích suy nghĩ sáng tạo, mới mẻ, đột phá.',
    type: GiftType.H
  },
  {
    id: 41,
    text: 'Con có thể dễ dàng trình bày các ý tưởng.',
    type: GiftType.I
  },
  {
    id: 42,
    text: 'Con rất kiên định.',
    type: GiftType.I
  },
  {
    id: 43,
    text: 'Con thường dùng trực giác để quyết định.',
    type: GiftType.I
  },
  {
    id: 44,
    text: 'Con có thể dễ dàng lập kế hoạch cho tương lai.',
    type: GiftType.I
  },
  {
    id: 45,
    text: 'Con có thể thực hiện các kế hoạch.',
    type: GiftType.I
  },
  {
    id: 46,
    text: 'Con có mối quan hệ cá nhân với Chúa.',
    type: GiftType.J
  },
  {
    id: 47,
    text: 'Con có những cảm xúc mạnh mẽ về Chúa.',
    type: GiftType.J
  },
  {
    id: 48,
    text: 'Con có những cuộc trò chuyện/thì giờ cầu nguyện chất lượng với Chúa.',
    type: GiftType.J
  },
  {
    id: 49,
    text: 'Con có một mối tương giao mật thiết với Chúa.',
    type: GiftType.J
  },
  {
    id: 50,
    text: 'Con tin Chúa có kế hoạch cho cuộc đời mình.',
    type: GiftType.J
  },
  {
    id: 51,
    text: 'Con có những suy nghĩ mà các bạn đồng trang lứa dường như không có.',
    type: GiftType.K
  },
  {
    id: 52,
    text: 'Con có những nhìn nhận sâu sắc mà các bạn đồng trang lứa dường như không có.',
    type: GiftType.K
  },
  {
    id: 53,
    text: 'Con đưa ra quyết định dựa trên hiểu biết của mình.',
    type: GiftType.K
  },
  {
    id: 54,
    text: 'Con nhìn nhận sự việc dựa trên lời Chúa.',
    type: GiftType.K
  },
  {
    id: 55,
    text: 'Con hiểu sự việc nên như thế nào. Con nhìn thấy bức tranh lớn.',
    type: GiftType.K
  },
  {
    id: 56,
    text: 'Con hay gần gũi với động vật, thực vật hay thiên nhiên nói chung.',
    type: GiftType.L
  },
  {
    id: 57,
    text: 'Con hiền lành và yêu thương động vật/thực vật/thiên nhiên.',
    type: GiftType.L
  },
  {
    id: 58,
    text: 'Con yêu thích vẻ đẹp của động vật/thực vật/thiên nhiên.',
    type: GiftType.L
  },
  {
    id: 59,
    text: 'Con thích dành thời gian tận hưởng thiên nhiên.',
    type: GiftType.L
  },
  {
    id: 60,
    text: 'Con thích chăm sóc động vật/thực vật/thiên nhiên.',
    type: GiftType.L
  }
];
