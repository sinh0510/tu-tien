export const theChatList = [
  {
    id: "common_01",
    name: "Phàm Thể",
    rarity: "common",
    desc: "Thân thể bình thường như người phàm, không có đặc điểm nổi bật.",
    effect: "Không có hiệu ứng đặc biệt.",
    bonus: {}
  },
  {
    id: "common_02",
    name: "Cường Tráng Thể",
    rarity: "common",
    desc: "Thân thể khỏe mạnh, chống chịu cao hơn người thường.",
    effect: "+5% HP tối đa, kháng sát thương vật lý nhẹ.",
    bonus: {
      hp: 0.05,
      physical_resist: 0.05
    }
  },
  {
    id: "uncommon_01",
    name: "Luyện Thể Thể",
    rarity: "uncommon",
    desc: "Thích hợp tu luyện công pháp cường hóa thân thể.",
    effect: "+10% hiệu quả luyện thể, giảm sát thương vật lý.",
    bonus: {
      body_training: 0.10,
      physical_resist: 0.05
    }
  },
  {
    id: "uncommon_02",
    name: "Tinh Thần Thể",
    rarity: "uncommon",
    desc: "Thể chất tâm trí vững vàng, kháng tâm ma.",
    effect: "Kháng hiệu ứng mê hoặc, +5% hiệu quả công pháp tinh thần.",
    bonus: {
      mental_resist: 0.10,
      spirit_skill_bonus: 0.05
    }
  },
  {
    id: "rare_01",
    name: "Băng Tâm Thể",
    rarity: "rare",
    desc: "Tâm không dao động, phù hợp công pháp khống chế và ẩn nhẫn.",
    effect: "Tăng hiệu quả tu luyện pháp môn khống chế, giảm bị ảnh hưởng cảm xúc.",
    bonus: {
      control_skill_bonus: 0.10,
      emotional_resist: 0.1
    }
  },
  {
    id: "rare_02",
    name: "Thuần Dương Thể",
    rarity: "rare",
    desc: "Thể chất thuần dương, phù hợp công pháp hệ Hỏa hoặc Dương khí.",
    effect: "Tăng 15% hấp thụ linh khí Hỏa, kháng Âm khí.",
    bonus: {
      fire_absorb: 0.15,
      yin_resist: 0.1
    }
  },
  {
    id: "rare_03",
    name: "Thuần Âm Thể",
    rarity: "rare",
    desc: "Thể chất thuần âm, phù hợp công pháp hệ Thủy hoặc Âm khí.",
    effect: "Tăng 15% hấp thụ linh khí Thủy, kháng Dương khí.",
    bonus: {
      water_absorb: 0.15,
      yang_resist: 0.1
    }
  },
  {
    id: "rare_04",
    name: "Ngũ Hành Cân Bằng Thể",
    rarity: "rare",
    desc: "Ngũ hành luân chuyển ổn định, dễ tu luyện đa thuộc tính.",
    effect: "Không bị xung đột khi dùng đa hệ công pháp.",
    bonus: {
      multi_element_bonus: true
    }
  },
  {
    id: "epic_01",
    name: "Thiên Sinh Đạo Thể",
    rarity: "epic",
    desc: "Sinh ra đã phù hợp với thiên đạo, dễ lĩnh ngộ đạo lý.",
    effect: "Tăng tỷ lệ ngộ đạo, giảm thời gian đột phá cảnh giới.",
    bonus: {
      enlightenment_rate: 0.20,
      breakthrough_speed: 0.15
    }
  },
  {
    id: "epic_02",
    name: "Chiến Thần Thể",
    rarity: "epic",
    desc: "Thân thể chiến đấu hoàn mỹ, sinh ra để giao chiến.",
    effect: "+20% sức mạnh khi HP dưới 50%, tăng kháng sát thương.",
    bonus: {
      low_hp_atk_boost: 0.2,
      damage_resist: 0.1
    }
  },
  {
    id: "epic_03",
    name: "Độc Linh Thể",
    rarity: "epic",
    desc: "Thể chất miễn nhiễm độc tố, thích hợp luyện độc.",
    effect: "Miễn nhiễm độc cơ bản, tăng hiệu quả công pháp độc hệ.",
    bonus: {
      poison_resist: 1.0,
      poison_skill_bonus: 0.15
    }
  },
  {
    id: "epic_04",
    name: "Thánh Quang Thể",
    rarity: "epic",
    desc: "Mang theo khí tức thuần khiết, phù hợp công pháp chữa trị.",
    effect: "Tăng 25% hiệu quả trị thương, giảm khả năng bị nhập ma.",
    bonus: {
      heal_bonus: 0.25,
      devil_resist: 0.2
    }
  },
  {
    id: "legendary_01",
    name: "Hỗn Độn Thể",
    rarity: "legendary",
    desc: "Hấp thu mọi loại linh khí mà không xung đột, thân thể siêu việt.",
    effect: "Miễn xung đột linh khí, tăng 20% tốc độ tu luyện.",
    bonus: {
      qi_conflict_resist: true,
      cultivation_speed: 0.2
    }
  },
  {
    id: "legendary_02",
    name: "Bất Tử Chi Thể",
    rarity: "legendary",
    desc: "Khả năng hồi phục mạnh mẽ, khó bị tiêu diệt hoàn toàn.",
    effect: "Tự hồi phục 2% HP mỗi lượt, có thể hồi sinh 1 lần khi chết.",
    bonus: {
      regen_per_turn: 0.02,
      revive_once: true
    }
  },
  {
    id: "legendary_03",
    name: "Thiên Ma Thể",
    rarity: "legendary",
    desc: "Thể chất ma đạo, dễ bị hắc hóa nhưng cực kỳ mạnh khi chiến đấu.",
    effect: "+30% công kích khi bị hắc hóa, dễ rơi vào trạng thái nhập ma.",
    bonus: {
      dark_mode_attack: 0.3,
      devil_mode_chance: 0.2
    }
  },
  {
    id: "unique_01",
    name: "Đạo Thai Thể",
    rarity: "unique",
    desc: "Sinh ra mang theo khí tức đạo thai, hấp dẫn thiên đạo.",
    effect: "Tăng gấp đôi tốc độ lĩnh ngộ đạo, thu hút kỳ ngộ.",
    bonus: {
      enlightenment_rate: 1.0,
      fortune_bonus: 0.5
    }
  },
  {
    id: "unique_02",
    name: "Chân Ngã Thể",
    rarity: "unique",
    desc: "Không bị ảnh hưởng bởi quy tắc thiên địa. Con đường riêng biệt.",
    effect: "Không chịu phán xét nhân quả, miễn nhiễm tâm ma.",
    bonus: {
      karma_resist: true,
      heart_demon_immune: true
    }
  },
  {
    id: "unique_03",
    name: "Thời Không Thể",
    rarity: "unique",
    desc: "Có thể cảm ứng thời gian, không gian. Phù hợp pháp tắc hư vô.",
    effect: "Cho phép sử dụng công pháp thời gian/phong ấn không gian.",
    bonus: {
      time_law_bonus: true,
      space_law_bonus: true
    }
  },
  {
    id: "unique_04",
    name: "Luân Hồi Chi Thể",
    rarity: "unique",
    desc: "Hồi sinh từ luân hồi, nhớ được tiền kiếp. Hợp với công pháp sinh tử.",
    effect: "Ký ức tiền kiếp giúp chọn lại lựa chọn khi chết 1 lần.",
    bonus: {
      memory_keep: true,
      death_choice_retry: true
    }
  }
];
