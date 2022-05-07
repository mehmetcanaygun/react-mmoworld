const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container mx-auto px-2 md:px-0 h-40 flex flex-col justify-center items-center">
        <span className="text-4xl text-light font-macondo">MMOWorld</span>
        <span className="text-sm text-secondary mt-5">
          <a
            href="https://www.github.com/mehmetcanaygun"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mehmet Can Aygün
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
