const Header = () => {
  return(
    <div className="h-screen no-scroll-bar bg-amber-100 flex justify-center items-center text-center">
      <img src="/ph-logo.png" className="w-80"></img>
      <div className="font-bold text-9xl text-slate-800">
        <span className="underline decoration-amber-400">Hack </span>
        <span className="underline decoration-violet-400">Night </span>
        <span>0.2</span><br />
        <span className="text-6xl text-slate-600">9:00 PM </span>
      </div>
    </div>
  )
}

export default Header;