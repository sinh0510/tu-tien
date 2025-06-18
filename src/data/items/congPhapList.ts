export const congPhapList = [
  {
    id: "cp001",
    name: "Hỏa Diệm Quyết",
    desc: "Công pháp hệ Hỏa chuyên về bạo phát công kích.",
    type: "tấn công",
    requiredLinhCan: ["Hỏa linh căn", "Hỏa - Phong linh căn"],
    requiredTheChat: ["Chiến Thần Thể", "Thuần Dương Thể"],
    rarity: "rare",
    bonus: {
      atk: 15,
      critRate: 5
    }
  },
  {
    id: "cp002",
    name: "Thủy Linh Tâm Kinh",
    desc: "Công pháp hệ Thủy tăng khả năng hồi phục và điều hòa khí huyết.",
    type: "hồi phục",
    requiredLinhCan: ["Thủy linh căn", "Thủy - Mộc linh căn"],
    requiredTheChat: ["Thánh Quang Thể", "Thuần Âm Thể"],
    rarity: "rare",
    bonus: {
      regen: 10,
      resist: 5
    }
  },
  {
    id: "cp003",
    name: "Băng Phong Huyền Tâm",
    desc: "Khống chế địch thủ bằng sức mạnh băng giá, làm chậm và làm tê liệt.",
    type: "khống chế",
    requiredLinhCan: ["Băng linh căn", "Kim - Thủy - Băng linh căn"],
    requiredTheChat: ["Băng Tâm Thể", "Tinh Thần Thể"],
    rarity: "epic",
    bonus: {
      slowChance: 25,
      freezeChance: 10
    }
  },
  {
    id: "cp004",
    name: "Hỗn Độn Chân Giải",
    desc: "Công pháp cổ xưa hấp thu mọi loại linh khí, phát triển đồng đều.",
    type: "đa hệ",
    requiredLinhCan: ["Hỗn Độn linh căn"],
    requiredTheChat: ["Hỗn Độn Thể"],
    rarity: "legendary",
    bonus: {
      expRate: 30,
      atk: 10,
      resist: 10
    }
  },
  {
    id: "cp005",
    name: "Thiên Ma Biến",
    desc: "Công pháp ma đạo, sức mạnh bùng nổ nhưng nguy hiểm.",
    type: "ma đạo",
    requiredLinhCan: ["Ma linh căn", "Huyết linh căn"],
    requiredTheChat: ["Thiên Ma Thể"],
    rarity: "epic",
    bonus: {
      atk: 25,
      hpRegenNegative: -5
    }
  },
  {
    id: "cp006",
    name: "Tinh Thần Huyễn Ảnh",
    desc: "Ảo ảnh mê hoặc tâm trí kẻ địch, gây rối loạn chiến đấu.",
    type: "ảo thuật",
    requiredLinhCan: ["Phong linh căn", "Âm thanh linh căn"],
    requiredTheChat: ["Tinh Thần Thể"],
    rarity: "rare",
    bonus: {
      confuseChance: 20,
      evade: 5
    }
  },
  {
    id: "cp007",
    name: "Đạo Tâm Trí Kiên",
    desc: "Giúp người tu không bị lung lay khi tu luyện, tăng cơ hội đột phá.",
    type: "tăng trưởng",
    requiredLinhCan: [],
    requiredTheChat: ["Thiên Sinh Đạo Thể", "Tinh Thần Thể"],
    rarity: "epic",
    bonus: {
      breakthroughRate: 10,
      resist: 5
    }
  },
  {
    id: "cp008",
    name: "Chiến Thiên Cửu Thức",
    desc: "Bộ cửu thức cường công, chuyên dùng trong chiến đấu trực diện.",
    type: "tấn công",
    requiredLinhCan: ["Kim linh căn", "Kim - Hỏa - Phong linh căn"],
    requiredTheChat: ["Chiến Thần Thể", "Luyện Thể Thể"],
    rarity: "epic",
    bonus: {
      atk: 20,
      critDmg: 10
    }
  },
  {
    id: "cp009",
    name: "Lôi Phạt Cửu Thiên",
    desc: "Công pháp lôi hệ, tốc độ đánh nhanh và sát thương bạo kích cao.",
    type: "tấn công",
    requiredLinhCan: ["Lôi linh căn"],
    requiredTheChat: ["Chiến Thần Thể", "Độc Linh Thể"],
    rarity: "legendary",
    bonus: {
      atk: 20,
      atkSpeed: 15
    }
  },
  {
    id: "cp010",
    name: "Quang Minh Chân Kinh",
    desc: "Công pháp chính đạo, hỗ trợ chữa thương và thanh tẩy.",
    type: "hồi phục",
    requiredLinhCan: ["Thủy linh căn", "Băng linh căn"],
    requiredTheChat: ["Thánh Quang Thể"],
    rarity: "epic",
    bonus: {
      healing: 25,
      cleanse: 1
    }
  }
];