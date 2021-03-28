import TaskService from './task.service';
import * as Pact from '@pact-foundation/pact';
import Task from '../model/task';

describe('TaskService API', () => {

    const taskService = new TaskService('http://localhost', global.port);

    describe('createHero()', () => {

        beforeEach((done) => {
            const contentTypeJsonMatcher = Pact.Matchers.term({
                matcher: "application\\/json; *charset=utf-8",
                generate: "application/json; charset=utf-8"
            });

            global.provider.addInteraction({
                state: 'provider allows hero creation',
                uponReceiving: 'a POST request to create a hero',
                withRequest: {
                    method: 'POST',
                    path: '/v1/todo/create',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': contentTypeJsonMatcher
                    },
                    body: new Task(100, 'task 1', null)
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        'Content-Type': contentTypeJsonMatcher
                    },
                    body: Pact.Matchers.somethingLike(
                        new Task(100, 'task 1', null))
                }
            }).then(() => done());
        });

        it('sends a request according to contract', (done) => {
            taskService.createTask(new Task(100, 'task 1', null))
                .then(response => {
                    const task = response.data;
                    expect(task.id).toEqual(100);
                })
                .then(() => {
                    global.provider.verify()
                        .then(() => done(), error => {
                            done.fail(error)
                        })
                });
        });

    });

});