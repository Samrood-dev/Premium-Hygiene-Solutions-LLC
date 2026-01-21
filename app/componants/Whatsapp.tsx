import WhatsApp from "../Icons/whatsapp";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={`https://wa.me/${process.env.BUSINESS_WHATSAPP_NUMBER}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-110 transition-transform"
      >
        <WhatsApp className="h-14 w-14" />
      </a>
    </div>
  );
};

export default Whatsapp;
