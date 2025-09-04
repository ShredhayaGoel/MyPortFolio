function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
      <p className="text-center text-gray-300 mb-8">
        Feel free to reach out via email or connect on LinkedIn & GitHub.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:shredhayagoel.com" className="hover:text-blue-400">📧 Email</a>
        <a href="https://github.com/ShredhayaGoel" target="_blank" className="hover:text-blue-400">🐙 GitHub</a>
        <a href="https://linkedin.com/in/ShredhayaGoel" target="_blank" className="hover:text-blue-400">💼 LinkedIn</a>
      </div>
    </section>
  );
}
export default Contact;