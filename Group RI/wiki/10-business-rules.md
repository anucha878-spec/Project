===== PAGE 1289389390 | Functional Specification > 05. Business Rules Specification. =====
(empty page)


===== PAGE 1303511046 | Functional Specification > 05. Business Rules Specification. > 01. Delivery List =====
| Function Name | Screen Name/Batch Name | Version | Date Version | Signed off | Remark |
| Landing Reconcile Data | IRI-GRP-001 ข้อมูล Master group policy (List of policy)IRI-GRP-002 ข้อมูล กรรมธรรม์ ณ ต้นสัญญาIRI-GRP-003 ข้อมูล Claim (Death,TPD,Health)IRI-GRP-004 ข้อมูล Estimated Premium LayerIRI-GRP-005 ข้อมูล (R01) List of inforce by memberIRI-GRP-006 ข้อมูล AlterationIRI-GRP-007 ข้อมูล (R17) List of inforce by policyIRI-GRP-008 ข้อมูล (R61) Premium and movement (Actual)IRI-GRP-009 ข้อมูล Experience Refund (Actual)IRI-GRP-010 ข้อมูล Member over age (Actual) | 1.0 | 02/12/2025 | นำส่งรายละเอียดเอกสาร SRS โครงการ New Group RI ในส่วนของ Landing - Reconcile Data |  |


===== PAGE 1292238920 | Functional Specification > 09. Appendix > A03. เงื่อนไขการคิด RI Status =====
#### วัตถุประสงค์
เพื่อระบุ “สถานะของกรมธรรม์” สำหรับระบบ Group RI ว่ากรมธรรม์นั้นยังมีผลคุ้มครอง หมดอายุ หรือเลิกคุ้มครองแล้ว
| RI Status | ความหมาย |
| New Business | กรมธรรม์ปีแรก เริ่มมีผลคุ้มครองในงวด |
| Inforce | กรมธรรม์ต่ออายุ หรือยังคุ้มครองอยู่ |
| Lapsed | กรมธรรม์สิ้นผลคุ้มครอง หรือบอกเลิก |

#### หลักการคำนวณ RI Status
ตรวจสอบจาก policy_status, วันที่สิ้นสุดความคุ้มครอง (ExpireDate) และ ปีกรมธรรม์ (Policy Year) โดยมีเงื่อนไขดังนี้
- กรณี policy_status อยู่ใน ('B', 'I') - กรมธรรม์ยังมีผลตามระบบต้นทางB = New Business - กรมธรรม์ปีแรก เริ่มมีผลคุ้มครองในงวดI = Inforce - กรมธรรม์ต่ออายุ หรือยังคุ้มครองอยู่ให้ตรวจสอบวันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น (ExpireDate) กับ วันสิ้นเดือนของ Closing Period เช่น 31/10/2025กรณี ExpireDate >= วันที่สิ้นเดือนของ Closing Period นั้น ถือว่ากรมธรรม์นั้นมีผลบังคับ ณ สิ้นเดือน โดยจะแสดงค่าเป็น Inforce / New Business ขึ้นกับ Policy Yearถ้า Policy Year = 1 บันทึกค่า 'New Business'ถ้า Policy Year > 1 บันทึกค่า 'Inforce'กรณี ExpireDate < วันที่สิ้นเดือนของ Closing Period นั้น บันทึกค่า 'Lapsed' เพราะหมดอายุไปแล้วก่อนถึงสิ้นเดือนนั้น
- ให้ตรวจสอบวันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น (ExpireDate) กับ วันสิ้นเดือนของ Closing Period เช่น 31/10/2025กรณี ExpireDate >= วันที่สิ้นเดือนของ Closing Period นั้น ถือว่ากรมธรรม์นั้นมีผลบังคับ ณ สิ้นเดือน โดยจะแสดงค่าเป็น Inforce / New Business ขึ้นกับ Policy Yearถ้า Policy Year = 1 บันทึกค่า 'New Business'ถ้า Policy Year > 1 บันทึกค่า 'Inforce'กรณี ExpireDate < วันที่สิ้นเดือนของ Closing Period นั้น บันทึกค่า 'Lapsed' เพราะหมดอายุไปแล้วก่อนถึงสิ้นเดือนนั้น
- กรณี ExpireDate >= วันที่สิ้นเดือนของ Closing Period นั้น ถือว่ากรมธรรม์นั้นมีผลบังคับ ณ สิ้นเดือน โดยจะแสดงค่าเป็น Inforce / New Business ขึ้นกับ Policy Yearถ้า Policy Year = 1 บันทึกค่า 'New Business'ถ้า Policy Year > 1 บันทึกค่า 'Inforce'
- ถ้า Policy Year = 1 บันทึกค่า 'New Business'
- ถ้า Policy Year > 1 บันทึกค่า 'Inforce'
- กรณี ExpireDate < วันที่สิ้นเดือนของ Closing Period นั้น บันทึกค่า 'Lapsed' เพราะหมดอายุไปแล้วก่อนถึงสิ้นเดือนนั้น
- กรณีสถานะของกรมธรรม์(policy_status) = ('L') - กรมธรรม์สิ้นผลคุ้มครองแล้ว บันทึกค่า 'Lapsed'

