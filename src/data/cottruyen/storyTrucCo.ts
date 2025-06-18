export const storyTrucCo = [
  {
    "id": "start_001",
    "title": "Khởi Nguyên",
    "content": "Bạn tỉnh dậy trong một ngôi làng nhỏ, trời mưa phùn và sương mù dày đặc. Trên tay bạn là một khối ngọc kỳ lạ đang phát sáng.",
    "choices": [
      {
        "text": "Mang khối ngọc đến trưởng làng để hỏi.",
        "next": "intro_village"
      },
      {
        "text": "Cất khối ngọc đi và giả vờ như chưa có gì xảy ra.",
        "next": "ignore_path"
      },
      {
        "text": "Thi triển linh lực lên ngọc (nếu có).",
        "next": "burn_self",
        "death": true
      }
    ]
  },
  {
    "id": "intro_village",
    "title": "Tiên Duyên Manh Nha",
    "content": "Trưởng làng nhận ra đây là truyền thừa từ một vị tu sĩ xa xưa. Ông khuyên bạn nên lên núi tìm cơ duyên.",
    "choices": [
      {
        "text": "Lên núi ngay trong đêm.",
        "next": "mountain_trial"
      },
      {
        "text": "Ở lại thêm vài ngày để chuẩn bị.",
        "next": "bandit_attack"
      }
    ]
  },
  {
    "id": "ignore_path",
    "title": "Lựa Chọn Phàm Tục",
    "content": "Bạn sống cuộc đời như người bình thường. 20 năm sau, khi vết thương cũ trở lại, bạn nhận ra mình đã bỏ lỡ cơ hội duy nhất.",
    "choices": [],
    "death": true
  },
  {
    "id": "burn_self",
    "title": "Tẩu Hỏa Nhập Ma",
    "content": "Bạn chưa có tu vi, cố thi triển linh lực khiến ngọc vỡ, linh lực phản phệ khiến cơ thể bạn bị tổn thương nghiêm trọng.",
    "choices": [],
    "death": true
  },
  {
    "id": "bandit_attack",
    "title": "Biến Cố Bất Ngờ",
    "content": "Một nhóm thổ phỉ tấn công làng trong đêm. Bạn bị thương, nhưng cũng kích phát được linh căn tiềm ẩn.",
    "choices": [
      {
        "text": "Phản kháng bằng mọi giá.",
        "next": "awaken_power"
      },
      {
        "text": "Chạy trốn khỏi làng.",
        "next": "wanderer_path"
      }
    ]
  },
  {
    "id": "mountain_trial",
    "title": "Thử Thách Trên Núi",
    "content": "Trên núi, bạn gặp một trận pháp cổ xưa. Một lối vào kỳ cảnh mở ra trước mặt.",
    "choices": [
      {
        "text": "Bước vào kỳ cảnh.",
        "next": "ancient_realm"
      },
      {
        "text": "Tìm cách giải trận trước.",
        "next": "formation_fail",
        "death": true
      }
    ]
  },
  {
    "id": "awaken_power",
    "title": "Khai Phá Linh Căn",
    "content": "Bạn thức tỉnh linh căn và đánh lui được thổ phỉ. Dân làng kính nể, nhưng bạn quyết định rời đi để tu hành.",
    "choices": [
      {
        "text": "Đến tông môn gần nhất để bái nhập.",
        "next": "sect_entry"
      },
      {
        "text": "Tu luyện một mình như tán tu.",
        "next": "solo_path"
      }
    ]
  }
];