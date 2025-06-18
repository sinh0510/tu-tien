import React, { useState } from "react";
import "./styles.css";
import { tuviData } from "./data/tuvi_full_detailed.ts";
import { linhCanList } from "./data/linhcan.ts";
import { theChatList } from "./data/thechat.ts";
import { storyTrucCo } from "./data/cottruyen/storyTrucCo.ts";

// Hàm random theo trọng số rarity
function getRandomByWeight(list, weights) {
  const expandedList = list.flatMap((item) =>
    Array(weights[item.rarity] || 1).fill(item)
  );
  const rand = Math.floor(Math.random() * expandedList.length);
  return expandedList[rand];
}

function App() {
  const [hasCharacter, setHasCharacter] = useState(false);
  const [character, setCharacter] = useState({
    name: "",
    gender: "",
    linhCan: null,
    theChat: null,
    congPhap: [],
  });

  const [tuViLevel, setTuViLevel] = useState(0);
  const [exp, setExp] = useState(0);
  const [current, setCurrent] = useState("start");

  const currentTuVi = tuviData[tuViLevel];
  const node = storyTrucCo[current];

  const gainExp = (amount) => {
    const next = tuviData[tuViLevel + 1];
    if (!next) return;
    const linhCanMultiplier = character.linhCan?.multiplier || 1;
    const theChatBonus = character.theChat?.bonus?.exp || 1;
    const adjusted = amount * linhCanMultiplier * theChatBonus;
    const newExp = exp + adjusted;
    if (newExp >= next.exp) {
      setTuViLevel(tuViLevel + 1);
      setExp(newExp - next.exp);
    } else {
      setExp(newExp);
    }
  };

  if (!hasCharacter) {
    return (
      <div className="game-container">
        <h1>Tạo Nhân Vật</h1>
        <input
          placeholder="Tên nhân vật"
          value={character.name}
          onChange={(e) =>
            setCharacter({ ...character, name: e.target.value })
          }
        />
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              onChange={(e) =>
                setCharacter({ ...character, gender: e.target.value })
              }
            />
            Nam
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              onChange={(e) =>
                setCharacter({ ...character, gender: e.target.value })
              }
            />
            Nữ
          </label>
        </div>
        <button
          onClick={() => {
            if (!character.name || !character.gender) {
              alert("Nhập đủ thông tin!");
              return;
            }
            const linhCan = getRandomByWeight(linhCanList, {
              common: 60,
              uncommon: 30,
              legendary: 10,
            });
            const theChat = getRandomByWeight(theChatList, {
              common: 50,
              uncommon: 30,
              rare: 15,
              epic: 4,
              legendary: 1,
              unique: 1,
            });
            setCharacter((prev) => ({
              ...prev,
              linhCan,
              theChat,
            }));
            setHasCharacter(true);
          }}
        >
          Bắt đầu
        </button>
      </div>
    );
  }

  // if (node?.condition && !node.condition(character)) {
  //   return (
  //     <div className="game-container">
  //       <p>Đoạn truyện không khả dụng với nhân vật này.</p>
  //       <button onClick={() => setCurrent("start")}>Chơi lại</button>
  //     </div>
  //   );
  // }

  return (
    <div className="game-container">
      <h1>
        {character.name} - {character.gender}
      </h1>
      <p>
        Linh căn: {character.linhCan?.name} ({character.linhCan?.desc})
      </p>
      <p>
        Thể chất: {character.theChat?.name} ({character.theChat?.desc})
      </p>
      <p>
        Cảnh giới: {currentTuVi.name} - {currentTuVi.desc}
      </p>
      <p>
        Kinh nghiệm: {Math.floor(exp)}/{tuviData[tuViLevel + 1]?.exp || "MAX"}
      </p>

      {/* <p>{node.text}</p> */}
      <div className="choices">
        {node?.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(choice.next);
              gainExp(10);
            }}
          >
            {choice.text}
          </button>
        ))}
        {node?.choices.length === 0 && (
          <button onClick={() => setCurrent("start")}>Chơi lại</button>
        )}
      </div>
    </div>
  );
}

export default App;
