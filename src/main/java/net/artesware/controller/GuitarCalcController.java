package net.artesware.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.artesware.service.GuitarCalculator;

@RestController
public class GuitarCalcController {
	
	@Autowired
	private GuitarCalculator calculator;

	@GetMapping("/calcFretPositions")
	@ResponseBody
	public List<Map<String, Object>> calcFretPositions(@RequestParam float scale, int numFrets) {
		return calculator.calcFretPositions(scale, numFrets);
	}
}
