const Contact = () => {
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-2xl">Contact</h1>
            <form className="grid grid-cols-1">
                <input type="text" placeholder="Your Name" className="border-2 border-gray-300 p-2 m-2 rounded-sm" />
                <input type="email" placeholder="Your Email" className="border-2 border-gray-300 p-2 m-2 rounded-sm" />
                <textarea placeholder="Your Message" className="border-2 border-gray-300 p-2 m-2 rounded-sm"></textarea>
                <button className="bg-blue-500 text-white p-2 m-2 rounded-sm">Send</button>
            </form>
        </div>
    )
}

export default Contact;