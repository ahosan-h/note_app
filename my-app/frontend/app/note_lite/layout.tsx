// Remove the import of NoteUi from "./page"
// Next.js handles this injection automatically

export default function NoteLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="h-max w-full">
            {/* Any shared UI like a Header goes here */}
          
            
            <main>{children}</main> {/* page.tsx content appears here */}
        </div>
    )
}