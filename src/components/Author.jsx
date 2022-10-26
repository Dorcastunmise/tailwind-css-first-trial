import face from "../images/mine.jpg";

const Author = () => {
  return (
    <>
        <section className="py-8 px-8 max-w-sm mx-auto bg-slate-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 my-10">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={face} alt="Woman's Face"/>
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-slate-900 font-semibold">
                            Oluwatunmise
                        </p>
                        <p className="text-slate-500 font-medium">
                            Frontend Developer
                        </p>
                    </div>
            <button className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full
                border border-purple-200 hover:text-white hover:bg-slate-600 hover:border-transparent 
                focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-inset">Message</button>
                </div>
        </section>
    </>
  );
};

export default Author;