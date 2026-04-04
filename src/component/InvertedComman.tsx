import mark from '../assets/images/quotation-mark.png'
const InvertedComman = () => {
  return (
    <div className="w-12">
      <img src={mark} alt="quotation" style={{filter:"brightness(0) saturate(100%) opacity(0.3)"}} />
    </div>
  );
};

export default InvertedComman;
