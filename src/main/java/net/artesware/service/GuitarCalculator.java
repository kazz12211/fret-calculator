package net.artesware.service;

import java.util.Map;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Component
public class GuitarCalculator {

	public List<Map<String, Object>> calcFretPositions(float scale, int numFrets) {
		float f = scale;
		float lastPos = 0.0f;
		List result = new ArrayList<Map<String, Object>>();
		Map<String, Object> pos;
		for(int i = 0; i < numFrets + 1; i++) {
			float fretPos = f / 17.817f;
			f -= fretPos;
			pos = new HashMap<String, Object>();
			pos.put("fret", i+1);
			pos.put("positionFromNut", lastPos + fretPos);
			pos.put("positionFromFret", fretPos);
			result.add(pos);
			lastPos += fretPos;
		}
		return result;
	}

}
