import { createContext, useContext, useState, ReactNode } from "react";

// 1. User 타입 정의
type User = {
  name: string;
  age: number;
};

// 2. Context 타입 정의
type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

// 3. Context 생성 (초기값은 undefined로 처리하고 useContext에서 예외 처리)
const UserContext = createContext<UserContextType | undefined>(undefined);

// 4. Provider 컴포넌트
function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({ name: "익명", age: 0 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// 5. useContext 사용 컴포넌트
function UserProfile() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserProfile must be used within a UserProvider");
  }

  const { user, setUser } = context;

  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <button onClick={() => setUser({ name: "김철수", age: 25 })}>
        정보 변경
      </button>
    </div>
  );
}

// 6. 전체 앱 구성
function App2() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default App2;
