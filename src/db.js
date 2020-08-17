const users = [{
	id: '1',
	name: 'Eric',
	email: 'eric@test.com',
	age: 34
}, {
	id: '2',
	name: 'Sarah',
	email: 'sarah@test.com'
}, {
	id: '3',
	name: 'Mike',
	email: 'mike@test.com'
}]

const posts = [{
	id: '10',
	title: 'GraphQL 101',
	body: 'This is a test content',
	published: true,
	author: '1'
}, {
	id: '11',
	title: 'GraphQL 102',
	body: 'Test comment for 2nd post',
	published: false,
	author: '1'
}, {
	id: '12',
	title: 'Programming learning',
	body: '',
	published: true,
	author: '2'
}]

const comments = [{
	id: '1',
	text: 'Test comment 1',
	author: '2',
	post: '10'
}, {
	id: '2',
	text: 'Test comment 2',
	author: '1',
	post: '11'
}, {
	id: '3',
	text: 'Test comment 3',
	author: '3',
	post: '13'
}, {
	id: '4',
	text: 'Test comment 4',
	author: '1',
	post: '13'
}]

const db = {
	users,
	posts,
	comments
}

export { db as default }