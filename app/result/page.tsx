// "use client";
// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// const Result: React.FC = () => {
//   const searchParams = useSearchParams();
//   const move = searchParams.get("move");

//   const [score, setScore] = useState(0);
//   const [verdict, setVerdict] = useState("");

//   useEffect(() => {
//     const storedScore = localStorage.getItem("score");
//     if (storedScore) {
//       setScore(parseInt(storedScore, 10));
//     }
//   }, []);

//   const getRandomMove = () => {
//     const moves = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * moves.length);
//     return moves[randomIndex];
//   };

//   const computerMove = getRandomMove();

//   const getResult = (playerMove: string, computerMove: string) => {
//     if (playerMove === computerMove) {
//       setVerdict("It's a tie!");
//     } else if (
//       (playerMove === "rock" && computerMove === "scissors") ||
//       (playerMove === "paper" && computerMove === "rock") ||
//       (playerMove === "scissors" && computerMove === "paper")
//     ) {
//       setVerdict("You win!");
//       const newScore = score + 1;
//       setScore(newScore);
//       localStorage.setItem("score", newScore.toString());
//     } else {
//       setVerdict("Computer wins!");
//       const newScore = score - 1;
//       setScore(newScore);
//       localStorage.setItem("score", newScore.toString());
//     }
//   };

//   useEffect(() => {
//     if (move) {
//       getResult(move, computerMove);
//     }
//   }, [move, computerMove]);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div>
//         <h1>Your move: {move}</h1>
//         <h2>Computer's move: {computerMove}</h2>
//         <h3>{verdict}</h3>
//         <Link href="/">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
//             Play Again
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Result;
