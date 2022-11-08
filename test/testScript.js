import { check, group, sleep } from 'k6';
import http from 'k6/http';

export const options = {
	vus: 20, // Virtual Users
	duration: '30s',
};

const products = `http://localhost:3000/products`

const productsByID = `http://localhost:3000/products/${
	Math.floor(Math.random() * 1000000) + 1
}`;

const styles = `http://localhost:3000/products/${
	Math.floor(Math.random() * 1000000) + 1
}/styles`;


const related = `http://localhost:3000/${
	Math.floor(Math.random() * 1000000) + 1
}/related`;




export default function test() {
	// group('productsResponse', () => {
	// 	const productsResponse = http.get(products);
	// 	check(productsResponse, {
	// 		'transaction time 10ms': (r) => r.timings.duration < 10,
	// 		'transaction time 50ms': (r) => r.timings.duration < 50,
	// 		'transaction time 200ms': (r) => r.timings.duration < 200,
	// 		'transaction time 500ms': (r) => r.timings.duration < 500,
	// 		'transaction time 1000ms': (r) => r.timings.duration < 1000,
	// 		'transaction time 2000ms': (r) => r.timings.duration < 2000,
	// 		'transaction time 5000ms': (r) => r.timings.duration < 5000,
	// 		'transaction time 10s': (r) => r.timings.duration < 10000,
	// 		'transaction time 20s': (r) => r.timings.duration < 20000,
	// 	});
	// });

	// group('productsByIDResponse', () => {
	// 	const productsByIDResponse = http.get(productsByID);
	// 	check(productsByIDResponse, {
	// 		'transaction time 10ms': (r) => r.timings.duration < 10,
	// 		'transaction time 50ms': (r) => r.timings.duration < 50,
	// 		'transaction time 200ms': (r) => r.timings.duration < 200,
	// 		'transaction time 500ms': (r) => r.timings.duration < 500,
	// 		'transaction time 1000ms': (r) => r.timings.duration < 1000,
	// 		'transaction time 2000ms': (r) => r.timings.duration < 2000,
	// 		'transaction time 5000ms': (r) => r.timings.duration < 5000,
	// 		'transaction time 10s': (r) => r.timings.duration < 10000,
	// 		'transaction time 20s': (r) => r.timings.duration < 20000,
	// 	});
	// });

	group('stylesResponse', () => {
		const stylesResponse = http.get(styles);
		check(stylesResponse, {
			'transaction time 10ms': (r) => r.timings.duration < 10,
			'transaction time 50ms': (r) => r.timings.duration < 50,
			'transaction time 200ms': (r) => r.timings.duration < 200,
			'transaction time 500ms': (r) => r.timings.duration < 500,
			'transaction time 1000ms': (r) => r.timings.duration < 1000,
			'transaction time 2000ms': (r) => r.timings.duration < 2000,
			'transaction time 5000ms': (r) => r.timings.duration < 5000,
			'transaction time 10s': (r) => r.timings.duration < 10000,
			'transaction time 20s': (r) => r.timings.duration < 20000,
		});
	});

	// group('relatedResponse', () => {
	// 	const relatedResponse = http.get(related);
	// 	check(relatedResponse, {
	// 		'transaction time 10ms': (r) => r.timings.duration < 10,
	// 		'transaction time 50ms': (r) => r.timings.duration < 50,
	// 		'transaction time 200ms': (r) => r.timings.duration < 200,
	// 		'transaction time 500ms': (r) => r.timings.duration < 500,
	// 		'transaction time 1000ms': (r) => r.timings.duration < 1000,
	// 		'transaction time 2000ms': (r) => r.timings.duration < 2000,
	// 		'transaction time 5000ms': (r) => r.timings.duration < 5000,
	// 		'transaction time 10s': (r) => r.timings.duration < 10000,
	// 		'transaction time 20s': (r) => r.timings.duration < 20000,
	// 	});
	// });
}