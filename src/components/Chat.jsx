const Chat = () => {
  return (
        <section className="p-6 max-w-sm mx-auto bg-slate-100 rounded-xl shadow-lg flex items-center space-x-4 my-10">
            <div className="shrink-0">
                <a href="https://www.microsoft.com/en/microsoft-teams/log-in"><img className="h-12 w-12" src="./public/logo.jpg" alt="ChitChat Logo" />
                </a>
            </div>
            <div>
                <div className="text-xl font-medium text-slate-900">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
            </div>
        </section>    
  );
};

export default Chat;