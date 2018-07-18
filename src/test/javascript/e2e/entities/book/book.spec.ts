import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { BookComponentsPage, BookUpdatePage } from './book.page-object';

describe('Book e2e test', () => {
    let navBarPage: NavBarPage;
    let bookUpdatePage: BookUpdatePage;
    let bookComponentsPage: BookComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Books', () => {
        navBarPage.goToEntity('book');
        bookComponentsPage = new BookComponentsPage();
        expect(bookComponentsPage.getTitle()).toMatch(/Books/);
    });

    it('should load create Book page', () => {
        bookComponentsPage.clickOnCreateButton();
        bookUpdatePage = new BookUpdatePage();
        expect(bookUpdatePage.getPageTitle()).toMatch(/Create or edit a Book/);
        bookUpdatePage.cancel();
    });

    it('should create and save Books', () => {
        bookComponentsPage.clickOnCreateButton();
        bookUpdatePage.setNameInput('name');
        expect(bookUpdatePage.getNameInput()).toMatch('name');
        bookUpdatePage.setDescriptionInput('description');
        expect(bookUpdatePage.getDescriptionInput()).toMatch('description');
        bookUpdatePage.userSelectLastOption();
        bookUpdatePage.save();
        expect(bookUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
