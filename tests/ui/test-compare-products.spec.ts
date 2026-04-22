import { test } from '../../pages/base-page';
import { user } from '../../data/login.data';
import { Constants } from '../../utilities/constants';
import { CommonPage } from '../../pages/common-page';

test.describe('Compare Products Tests', () => {

  test.beforeEach(async ({ commonPage, loginPage }) => {
    await commonPage.goto(Constants.LOGIN_URL);
    await loginPage.login(user);
  });

  test('TC-CP-001 | Add 2 products to Compare and verify compare page', async ({ commonPage, productPage }) => {
        // ── STEP 1-2: Truy cập trang category ────────────────────
    await commonPage.selectSidebarItem(' Phone, Tablets & Ipod');
    // await productPage.verifyPageLoaded();

    // // ── STEP 3-5: Thêm HTC Touch HD, kiểm tra toast và đóng ──
    // await categoryPage.addAndVerifyProductInToast(PRODUCTS.HTC, 1);
    // await categoryPage.closeToast();

    // // ── STEP 6-8: Thêm Palm Treo Pro, kiểm tra toast ─────────
    // await categoryPage.addAndVerifyProductInToast(PRODUCTS.PALM, 2);
    // await categoryPage.closeToast();


    // // ── STEP 9-10: Truy cập trang compare, verify title ──────
    // await comparePage.navigate();
    // await comparePage.verifyPageLoaded();

    // // ── STEP 11-15: Kiểm tra dữ liệu trong bảng Compare ──────
    // await comparePage.verifyProductsDetails(PRODUCTS.HTC, PRODUCTS.PALM);
  });

});
