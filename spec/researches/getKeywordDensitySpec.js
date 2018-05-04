/* global describe it expect */
const getKeywordDensity = require( "../../js/researches/getKeywordDensity.js" );
const Paper = require( "../../js/values/Paper.js" );
const Researcher = require( "../../js/researcher" );

describe( "Test for counting the keyword density in a text", function() {
	it( "returns keyword density", function() {
		let mockPaper = new Paper( "a string of text with the keyword in it, density should be 7.9%", { keyword: "keyword" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 7.948717948717948 );
		mockPaper = new Paper( "a string of text without the keyword in it, density should be 0%", { keyword: "empty" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 0 );
		mockPaper = new Paper( "Waltz keepin auf mitz auf keepin äöüß weiner blitz deutsch spitzen. ", { keyword: "äöüß" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 9.393939393939394 );
		mockPaper = new Paper( "Lorem ipsum dolor sit amet, key word consectetur key-word adipiscing elit ", { keyword: "key-word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper )  ) ).toBe( 9.393939393939394 );
		mockPaper = new Paper( "a string of text with the kapaklı in it, density should be 7.9%", { keyword: "kapaklı" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 7.948717948717948 );
		mockPaper = new Paper( "a string of text with the key-word in it, density should be 7.9%", { keyword: "key-word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 7.948717948717948 );
		mockPaper = new Paper( "a string of text with the key_word in it, density should be 7.9%", { keyword: "key_word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 7.948717948717948 );
		mockPaper = new Paper( "a string of text with the key_word in it, density should be 0.0%", { keyword: "key word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 0 );
		mockPaper = new Paper( "a string of text with the key-word in it, density should be 0.0%", { keyword: "key word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 0 );
		mockPaper = new Paper( "a string of text with the key&word in it, density should be 7.9%", { keyword: "key&word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 7.948717948717948 );
		mockPaper = new Paper( "<img src='http://image.com/image.png'>", { keyword: "key&word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 0 );
		// Consecutive keywords are skipped, so this will match 2 times.
		mockPaper = new Paper( "This is a nice string with a keyword keyword keyword.", { keyword: "keyword" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 20.666666666666664 );
		mockPaper = new Paper( "a string of text with the $keyword in it, density should be 7.9%", { keyword: "$keyword" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 7.948717948717948 );
		mockPaper = new Paper( "a string of text with the Keyword in it, density should be 7.9%", { keyword: "keyword" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 7.948717948717948 );
		mockPaper = new Paper( "a string of text with the Key word in it, density should be 9.76%", { keyword: "key word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 9.761904761904761 );
		mockPaper = new Paper( "a string with quotes to match the key'word, even if the quotes differ", { keyword: "key’word" } );
		expect( getKeywordDensity( mockPaper, new Researcher( mockPaper ) ) ).toBe( 7.948717948717948 );
	} );
} );
