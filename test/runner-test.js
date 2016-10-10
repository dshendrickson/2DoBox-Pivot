const assert = require('chai').assert;
const Runner = require('../lib/runner.js');

describe('Runner', function() {

  it('should have an array that stores ideas', function(){
    var runner = new Runner();
    assert.isArray(runner.ideasList);
  });

  it('should create an Idea when "generateNewIdea()" is called', function(){
    var runner = new Runner();

    runner.generateNewIdea();

    assert.equal(runner.ideasList.length, 1);
    assert.isObject(runner.ideasList[0]);
  });

  it.skip('should return a matching idea when findIdea() is called', function() {
    var runner = new Runner();

    runner.generateNewIdea({id: 123});
    runner.generateNewIdea({id: 456});
    runner.findIdea(456);

    assert.equal(idea.id, 456);
  });

  it.skip('should delete an idea from ideasList when "deleteIdeaFromStorage()" is called', function(){
    var runner = new Runner();

    runner.generateNewIdea();
    runner.generateNewIdea();
    runner.deleteIdeaFromStorage();

    assert.equal(runner.ideasList.length, 1);
  });

});
