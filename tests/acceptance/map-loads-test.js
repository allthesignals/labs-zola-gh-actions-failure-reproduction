import { module, test } from 'qunit';
import { visit, currentURL, findAll, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | map loads', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting / is okay', async function(assert) {
    await visit('/');

    await waitFor('#map-did-load');

    assert.equal(currentURL(), '/');
  });

  test('visiting / is okay', async function(assert) {
    assert.expect(0);

    await visit('/');

    await find('#map-did-load');
  });

  test('visiting / shows rendered', async function(assert) {
    await visit('/');

    await waitFor('#map-did-load');

    const rendered = await findAll('.rendered-features li');

    assert.equal(rendered.length, 2212);
  });
});
