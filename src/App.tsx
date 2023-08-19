import { useInfiniteQuery } from '@tanstack/react-query';
import './App.css'
import { getCharacters } from './actions/getCharacters'
import { getNextPage } from './actions/getNextPage';
import { Fragment, useEffect, useRef } from 'react';
import Character from './cmps/Character';


function App() {
	const {
		status,
		error,
		data,
		fetchNextPage
	} = useInfiniteQuery({
		queryKey: ['characters'],
		queryFn: getCharacters,
		getNextPageParam: getNextPage
	})


	const bottomRef = useRef<HTMLDivElement>(null);


	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
						fetchNextPage();
				}
			})
		}, {
				rootMargin: "3px 3px",
				root: null
		});

		if (bottomRef.current) {
			observer.observe(bottomRef.current)
		}

		return () => observer.disconnect();
	})
	if (status === 'loading') {
		return <p>Loading</p>
	}

	if (status === 'error') {
		let message = "Error: ";
		if (error instanceof Error) {
			message = message + error.message;
		}
		return <p>Error: {message}</p>
	}

  return (
		<main className="container">
			<>
				{data.pages.map((group, i) => (
					<Fragment key={i}>
						{
							group.results.map((character) => (
								<Character data={character} />
							))
						}
					</Fragment>
				))}
			</>
			<div ref={bottomRef} />
		</main>
	)
}

export default App
