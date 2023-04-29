import { useEffect, useState } from 'react';
import * as S from './styled'

type MemoType = {
    id: number;
    content: string;
  };

const Memo = () => {

    const [memos, setMemos] = useState<MemoType[]>([]);
    const [inputMemo, setInputMemo] = useState<string>("");
    const [selectedMemoId, setSelectedMemoId] = useState<number | null>(null);

    const memoData = localStorage.getItem("memos");
    useEffect(() => {
        if (memoData) {
          setMemos(JSON.parse(memoData));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("memos", JSON.stringify(memos));
    }, [memos]);

    //메모 추가
    const handleAddMemo = () => {
      if(inputMemo === "")
      {alert("검색어를 입력하세요")}
      else{
        const newMemo: MemoType = {
        id: new Date().getTime(),
        content: inputMemo,
        };
        setMemos([...memos, newMemo]);
        setInputMemo("");
      }
    };

    //메모 수정
    const handleEditMemo = (id: number, newContent: string) => {
      const updatedMemoList = memos.map((memo) => {
        if (memo.id === id) {
          return {
            ...memo,
            content: newContent,
          };
        } else {
        return memo;
        }
      });
      setMemos(updatedMemoList);
      localStorage.setItem("memos", JSON.stringify(updatedMemoList));
    };

    //메모 삭제
    const handleDeleteMemo = (id: number) => {
      const filteredMemos = memos.filter((memo) => memo.id !== id);
      setMemos(filteredMemos);
    };

  return (
    <div>
      <S.Memo>
        {memos.map((memo) => (
          <S.MemoList key={memo.id}>
            {selectedMemoId !== memo.id && (
              <S.EachMemo>
                <div onClick={() => setSelectedMemoId(memo.id)}>{memo.content}</div>
                <button onClick={() => handleDeleteMemo(memo.id)}>x</button>
              </S.EachMemo>
            )}
            {selectedMemoId === memo.id && (
              <S.Edit>
                <input
                  type="text"
                  value={memo.content}
                  onChange={(e) => handleEditMemo(memo.id, e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleEditMemo(memo.id, memo.content);
                      setSelectedMemoId(null);
                    }
                  }}
                />
                <button onClick={() => setSelectedMemoId(null)}>완료</button>
              </S.Edit>
            )}
          </S.MemoList>
        ))}
      </S.Memo>

      <S.MemoWrite>
        <input
          placeholder="메모 입력란"
          type="text"
          value={inputMemo}
          onChange={(e) => setInputMemo(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddMemo();
            }
          }}
        />
        <button onClick={handleAddMemo}>작성</button>
      </S.MemoWrite>
    </div>
)
}

export default Memo;