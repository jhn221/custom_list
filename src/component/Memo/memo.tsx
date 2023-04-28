import { useEffect, useState } from 'react';
import * as S from './styled'

type MemoType = {
    id: number;
    content: string;
  };

const Memo = () => {

    const [memos, setMemos] = useState<MemoType[]>([]);
    const [inputMemo, setInputMemo] = useState<string>("");
    const [edit, setEdit] = useState<boolean>(false);

    useEffect(() => {
        const memoData = localStorage.getItem("memos");
        if (memoData) {
          setMemos(JSON.parse(memoData));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("memos", JSON.stringify(memos));
    }, [memos]);

    const handleAddMemo = () => {
        const newMemo: MemoType = {
        id: new Date().getTime(),
        content: inputMemo,
        };
        setMemos([...memos, newMemo]);
        setInputMemo("");
    };

    const handleEnter = (e:any) => {
        console.log(e)
        if(e.key ==="Enter"){
            handleAddMemo()
        }
    }

    const handleEditMemo = (id: number, newContent: string) => {
      setEdit(true)
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

    const handleDeleteMemo = (id: number) => {
        const filteredMemos = memos.filter((memo) => memo.id !== id);
        setMemos(filteredMemos);
    };
    console.log(memos)

    const handleEditEnter = (e:any) => {
      console.log(e)
      if(e.key ==="Enter"){
          setEdit(false)
      }
  }

    return(
        <S.MemoArea>
            <S.Memo>
              {memos.map((memo) => (
                <div>
                  {edit ? 
                    <S.MemoList key={memo.id}>
                      <input
                        type="text"
                        value={memo.content}
                        onKeyPress={handleEditEnter}
                        onChange={(event) => handleEditMemo(memo.id, event.target.value)}
                      />
                      <button onClick={() => setEdit(false)}>완료</button>
                    </S.MemoList>
                    : 
                    <S.MemoList>
                      <div onClick={() => setEdit(!edit)}>{memo.content}</div>
                      <button onClick={() => handleDeleteMemo(memo.id)}>x</button>
                    </S.MemoList>
                  }
                </div>
              ))}
            </S.Memo>
            <S.MemoWrite>
                <input
                placeholder='메모 입력란'
                type="text" 
                value={inputMemo}
                onChange={(e) => setInputMemo(e.target.value)}
                onKeyPress={handleEnter} />
                <button onClick={handleAddMemo}>작성</button>
            </S.MemoWrite>
        </S.MemoArea>
    )

}

export default Memo;