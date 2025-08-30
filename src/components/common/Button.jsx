// const Button = ({ text, bg = '#FF624C', fontName = 'montserrat',fontWeight='bold',size='xl', color ="white", paddingY="4", paddingX="10", radius="10" }) => {
//   return (
//     <button
//       className={`bg-[${bg}]  font-${fontName} font-${fontWeight}  text-${color}    rounded-[${radius}px] `}
//       style={{
//         fontSize:'20px',
//         padding:paddingY+px+ " " + paddingX +"px",

        
//       }}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;


const Button = ({
  text,
  bg = '#FF624C',
  fontName = 'Montserrat',
  fontWeight = 'bold',
  size = '20px',
  color = 'white',
  paddingY = 12,
  paddingX = 24,
  radius = 10,
}) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        fontFamily: fontName,
        fontWeight,
        color,
        fontSize: size,
        padding: `${paddingY}px ${paddingX}px`,
        borderRadius: `${radius}px`,
      }}
      className="shadow-md hover:opacity-90 transition cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;

