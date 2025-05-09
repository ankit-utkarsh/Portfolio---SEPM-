export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Ankit Utkarsh Hota. All rights reserved.</p>
        <p className="text-gray-400 mt-2 text-sm">Computer Science Engineering | Section J1 | RA2211003010646</p>
      </div>
    </footer>
  )
}
