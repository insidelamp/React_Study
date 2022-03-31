import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {}; // 파이어 베이스 개인정보
initializeApp(firebaseConfig);

export const db = getFirestore(); // 변수 db에 파이어베이스 연결
