# EDW-MPS-PS018 ดึงข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1205436570
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
| **No.** | **Topic** | **Description** | | | |
| --- | --- | --- | --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | จัดเตรียมข้อมูล Monthly Policy Status Snapshot สำหรับดึงข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA เพื่อใช้สำหรับ Update ข้อมูลกรมธรรม์ที่เคยนำเข้าในฐานข้อมูล Monthly Policy Status Snapshot | | | |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | | | | |
| 3 | เวลาประมวลผล (Time) | ทุกวันที่ 2 เวลา 06.00 น. (6 โมงเช้า) | | | |
| 4 | ข้อมูลตั้งต้น(Input) | ข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA จากฐานข้อมูลในระบบ AS400 | | | |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA ของ MPS ที่ตาราง [tx_mps_landing_customer](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_customer) | | | |
| 6 | อธิบายรายละเอียด(Description) | ข้อมูล | **Validation** | Data Source | Update Landing |
| Customer ID | ตรวจสอบ [tx_mps_landing_customer](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_customer).policy_typepolicy_type = 'ORD' ทำการ update ที่ [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)policy_type = 'IND' ทำการ update ที่ [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) policy_type = 'PA' ทำการ update ที่ [tx_mps_landing_i03](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i03)โดยใช้ [tx_mps_landing_customer](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_customer).policy_number ในการค้นหารายการที่จะ update | [tx_mps_landing_customer](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_customer).customer_id | [tx_mps_landing_i01_ind.customer_id](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) [tx_mps_landing_i01_ord.customer_id](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)[tx_mps_landing_i03.customer_id](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i03) | | |