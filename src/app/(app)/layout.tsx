import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/lib/providers/theme-provider";

import type { Metadata } from "next";

import "@/app/globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: {
		default: "Michael's Portfolio",
		template: "%s | Michael Owuor",
	},
	description: "A modern and minimalist portfolio by Michael Owuor.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
				<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>{children}</body>
			</ThemeProvider>
		</html>
	);
};

export default RootLayout;
